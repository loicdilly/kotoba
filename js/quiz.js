// Quiz and Flashcard Engine for Kotoba
import { KANA_DATA } from '../data/kana.js';
import { VOCAB_DATA } from '../data/vocabulary.js';
import { audio } from './audio.js';
import { storage } from './storage.js';

export class QuizEngine {
  constructor() {
    this.currentDeck = [];
    this.currentIndex = 0;
    this.score = 0;
    this.quizType = 'kana'; // 'kana' | 'vocab' | 'listening' | 'speed'
    this.script = 'hiragana'; // 'hiragana' | 'katakana'
    this.questionCount = 10;
    this.timerInterval = null;
    this.timeLeft = 60;
    this.isAnswering = false;
  }

  // Helper: Shuffle array
  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- FLASHCARDS GENERATOR ---
  initFlashcards(options = {}) {
    const { type = 'kana', script = 'hiragana', row = 'all', category = 'all' } = options;
    this.quizType = type;
    this.script = script;

    if (type === 'kana') {
      let pool = KANA_DATA;
      if (row !== 'all') {
        pool = pool.filter(k => k.row === row);
      }
      this.currentDeck = this.shuffle(pool).map(item => ({
        id: item.id,
        primary: script === 'katakana' ? item.katakana : item.hiragana,
        secondary: script === 'katakana' ? item.hiragana : item.katakana,
        romaji: item.romaji,
        mnemonicEn: item.mnemonicEn || '',
        mnemonicFr: item.mnemonicFr || '',
        speechText: item.hiragana,
        type: 'kana'
      }));
    } else {
      let pool = VOCAB_DATA;
      if (category !== 'all') {
        pool = pool.filter(v => v.category === category);
      }
      this.currentDeck = this.shuffle(pool).map(item => ({
        id: item.id,
        primary: item.japanese,
        secondary: item.furigana !== item.japanese ? item.furigana : '',
        romaji: item.romaji,
        meaningFr: item.fr,
        meaningEn: item.en,
        speechText: item.furigana || item.japanese,
        notes: item.notes || '',
        type: 'vocab'
      }));
    }

    this.currentIndex = 0;
    this.score = 0;
    return this.currentDeck;
  }

  getCurrentCard() {
    if (!this.currentDeck || this.currentIndex >= this.currentDeck.length) return null;
    return {
      card: this.currentDeck[this.currentIndex],
      index: this.currentIndex + 1,
      total: this.currentDeck.length
    };
  }

  advanceCard(known = true) {
    const item = this.currentDeck[this.currentIndex];
    if (item) {
      if (item.type === 'kana') {
        storage.recordKanaReview(item.id, known);
      } else {
        storage.recordVocabReview(item.id, known);
      }
      if (known) this.score++;
    }

    this.currentIndex++;
    const isDone = this.currentIndex >= this.currentDeck.length;
    return {
      isDone,
      score: this.score,
      total: this.currentDeck.length,
      next: isDone ? null : this.getCurrentCard()
    };
  }

  // --- MULTIPLE CHOICE QUIZ GENERATOR ---
  initMultipleChoice(options = {}) {
    const { type = 'kana', script = 'hiragana', row = 'all', category = 'all', count = 10 } = options;
    this.quizType = type;
    this.script = script;
    this.questionCount = count;
    this.currentIndex = 0;
    this.score = 0;
    this.isAnswering = false;

    if (type === 'kana') {
      let pool = KANA_DATA;
      if (row !== 'all') {
        pool = pool.filter(k => k.row === row);
      }
      if (pool.length < 4) pool = KANA_DATA; // Ensure at least 4 options

      const questions = this.shuffle(pool).slice(0, count);
      this.currentDeck = questions.map(target => {
        // Decide question orientation (60% Kana -> Romaji, 40% Romaji -> Kana)
        const kanaToRomaji = Math.random() > 0.4;
        const char = script === 'katakana' ? target.katakana : target.hiragana;

        // Distractors
        const distractors = this.shuffle(KANA_DATA.filter(k => k.id !== target.id)).slice(0, 3);
        const options = this.shuffle([
          { text: kanaToRomaji ? target.romaji : char, isCorrect: true },
          ...distractors.map(d => ({
            text: kanaToRomaji ? d.romaji : (script === 'katakana' ? d.katakana : d.hiragana),
            isCorrect: false
          }))
        ]);

        return {
          id: target.id,
          type: 'kana',
          prompt: kanaToRomaji ? char : target.romaji,
          promptSub: kanaToRomaji ? (script === 'katakana' ? 'Katakana' : 'Hiragana') : 'Romaji',
          speechText: target.hiragana,
          options,
          correctAnswer: kanaToRomaji ? target.romaji : char
        };
      });
    } else if (type === 'vocab') {
      let pool = VOCAB_DATA;
      if (category !== 'all') {
        pool = pool.filter(v => v.category === category);
      }
      if (pool.length < 4) pool = VOCAB_DATA;

      const questions = this.shuffle(pool).slice(0, count);
      const lang = storage.getActiveProfile().settings.lang || 'fr';

      this.currentDeck = questions.map(target => {
        const distractors = this.shuffle(VOCAB_DATA.filter(v => v.id !== target.id)).slice(0, 3);
        const targetMeaning = lang === 'fr' ? target.fr : target.en;

        const options = this.shuffle([
          { text: targetMeaning, isCorrect: true },
          ...distractors.map(d => ({
            text: lang === 'fr' ? d.fr : d.en,
            isCorrect: false
          }))
        ]);

        return {
          id: target.id,
          type: 'vocab',
          prompt: target.japanese,
          promptSub: target.romaji,
          speechText: target.furigana || target.japanese,
          options,
          correctAnswer: targetMeaning
        };
      });
    } else if (type === 'listening') {
      // Audio quiz: Listen to audio, select matching kana or word
      const isKana = Math.random() > 0.4;
      const pool = isKana ? KANA_DATA : VOCAB_DATA;
      const questions = this.shuffle(pool).slice(0, count);

      this.currentDeck = questions.map(target => {
        const distractors = this.shuffle(pool.filter(item => item.id !== target.id)).slice(0, 3);

        const isKanaTarget = 'hiragana' in target;
        const targetText = isKanaTarget ? (script === 'katakana' ? target.katakana : target.hiragana) : target.japanese;
        const speech = isKanaTarget ? target.hiragana : (target.furigana || target.japanese);

        const options = this.shuffle([
          { text: targetText, sub: target.romaji, isCorrect: true },
          ...distractors.map(d => ({
            text: isKanaTarget ? (script === 'katakana' ? d.katakana : d.hiragana) : d.japanese,
            sub: d.romaji,
            isCorrect: false
          }))
        ]);

        return {
          id: target.id,
          type: 'listening',
          prompt: '🔊 Écoutez',
          promptSub: 'Quel mot ou son entendez-vous ?',
          speechText: speech,
          options,
          correctAnswer: targetText
        };
      });
    }

    return this.currentDeck;
  }

  getCurrentQuestion() {
    if (!this.currentDeck || this.currentIndex >= this.currentDeck.length) return null;
    return {
      question: this.currentDeck[this.currentIndex],
      index: this.currentIndex + 1,
      total: this.currentDeck.length
    };
  }

  submitAnswer(selectedOptionIndex) {
    if (this.isAnswering) return null;
    const currentQ = this.currentDeck[this.currentIndex];
    if (!currentQ) return null;

    this.isAnswering = true;
    const selected = currentQ.options[selectedOptionIndex];
    const isCorrect = selected && selected.isCorrect;

    if (isCorrect) {
      this.score++;
      audio.playChime('success');
      if (currentQ.type === 'kana') {
        storage.recordKanaReview(currentQ.id, true);
      } else {
        storage.recordVocabReview(currentQ.id, true);
      }
    } else {
      audio.playChime('error');
      if (currentQ.type === 'kana') {
        storage.recordKanaReview(currentQ.id, false);
      } else {
        storage.recordVocabReview(currentQ.id, false);
      }
    }

    return {
      isCorrect,
      selectedIndex: selectedOptionIndex,
      correctIndex: currentQ.options.findIndex(o => o.isCorrect)
    };
  }

  nextQuestion() {
    this.isAnswering = false;
    this.currentIndex++;
    const isDone = this.currentIndex >= this.currentDeck.length;

    if (isDone) {
      storage.recordQuizResult(this.quizType, this.score, this.currentDeck.length);
    }

    return {
      isDone,
      score: this.score,
      total: this.currentDeck.length,
      next: isDone ? null : this.getCurrentQuestion()
    };
  }

  // --- SPEED ROUND (60 SECONDS) ---
  initSpeedRound(onTick, onFinish) {
    this.initMultipleChoice({ type: 'kana', count: 50 });
    this.timeLeft = 60;
    this.score = 0;

    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (onTick) onTick(this.timeLeft);

      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        storage.recordQuizResult('speed_60s', this.score, this.currentIndex);
        if (onFinish) onFinish(this.score, this.currentIndex);
      }
    }, 1000);

    return this.getCurrentQuestion();
  }

  stopSpeedRound() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}

export const quizEngine = new QuizEngine();
