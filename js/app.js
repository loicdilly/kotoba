// Kotoba (言葉) - Main Application Controller
import { KANA_ROWS, KANA_DATA } from '../data/kana.js';
import { VOCAB_CATEGORIES, VOCAB_DATA } from '../data/vocabulary.js';
import { KANJI_DATA } from '../data/kanji.js';
import { audio } from './audio.js';
import { storage } from './storage.js';
import { quizEngine } from './quiz.js';

// Localization Dictionaries (FR & EN)
const I18N = {
  fr: {
    appTitle: 'Kotoba',
    appSub: 'Japonais Pas à Pas',
    navKana: 'Kana',
    navVocab: 'Vocabulaire',
    navKanji: 'Kanji',
    navPractice: 'Pratique',
    navFamily: 'Famille & Stats',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    allRows: 'Tous les sons',
    allCategories: 'Tout le vocabulaire',
    modeFlashcards: 'Cartes Mémoire (Flashcards)',
    descFlashcards: 'Mémorisez les caractères et mots à votre rythme',
    modeQuiz: 'Quiz Choix Multiple',
    descQuiz: 'Testez vos réflexes en 10 questions rapides',
    modeListening: 'Quiz Écoute & Audio',
    descListening: 'Entraînez votre oreille aux sons japonais',
    modeSpeed: 'Défi Vitesse 60s',
    descSpeed: 'Battez le record de la famille en 1 minute chrono !',
    tapToHear: 'Appuyez pour écouter',
    flipCard: 'Touchez pour retourner',
    knewIt: 'Je savais !',
    needPractice: 'À revoir',
    quizFinished: 'Session terminée !',
    scoreResult: 'Votre score :',
    continueBtn: 'Continuer',
    retryBtn: 'Recommencer',
    quitBtn: 'Quitter',
    streakTitle: 'jours d\'affilée !',
    streakSubtitle: 'La régularité est le secret du japonais.',
    kanaMastered: 'Kana Maîtrisés',
    vocabMastered: 'Mots Maîtrisés',
    quizzesCompleted: 'Quiz Réussis',
    accuracy: 'Précision Moyenne',
    familyLearners: 'Apprenants de la famille',
    addLearner: '+ Ajouter un membre',
    switchProfile: 'Changer de profil',
    exportBackup: 'Sauvegarder les progrès (JSON)',
    importBackup: 'Restaurer une sauvegarde',
    installTitle: 'Installer sur iPhone / Mac',
    installDesc: 'Ouvrez dans Safari, appuyez sur Partager puis "Sur l\'écran d\'accueil"',
    audioSpeed: 'Vitesse de prononciation',
    speedNormal: 'Normale',
    speedSlow: 'Lente (Débutant)',
    language: 'Langue de traduction',
    french: 'Français',
    english: 'English'
  },
  en: {
    appTitle: 'Kotoba',
    appSub: 'Step by Step Japanese',
    navKana: 'Kana',
    navVocab: 'Vocabulary',
    navKanji: 'Kanji',
    navPractice: 'Practice',
    navFamily: 'Family & Stats',
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    allRows: 'All Sounds',
    allCategories: 'All Vocabulary',
    modeFlashcards: 'Memory Flashcards',
    descFlashcards: 'Memorize characters & words at your own pace',
    modeQuiz: 'Multiple Choice Quiz',
    descQuiz: 'Test your reflexes with 10 quick questions',
    modeListening: 'Audio Listening Challenge',
    descListening: 'Train your ear to natural Japanese speech',
    modeSpeed: '60s Speed Sprint',
    descSpeed: 'Beat the family record in 60 seconds!',
    tapToHear: 'Tap to listen',
    flipCard: 'Tap card to flip',
    knewIt: 'Got it!',
    needPractice: 'Need review',
    quizFinished: 'Session Completed!',
    scoreResult: 'Your score:',
    continueBtn: 'Continue',
    retryBtn: 'Try Again',
    quitBtn: 'Quit',
    streakTitle: 'day streak!',
    streakSubtitle: 'Consistency is the secret to mastering Japanese.',
    kanaMastered: 'Mastered Kana',
    vocabMastered: 'Mastered Words',
    quizzesCompleted: 'Quizzes Taken',
    accuracy: 'Average Accuracy',
    familyLearners: 'Family Learners',
    addLearner: '+ Add Learner',
    switchProfile: 'Switch Profile',
    exportBackup: 'Export Progress (JSON)',
    importBackup: 'Import Progress',
    installTitle: 'Install on iPhone / Mac',
    installDesc: 'In Safari, tap Share and then "Add to Home Screen"',
    audioSpeed: 'Pronunciation Speed',
    speedNormal: 'Normal',
    speedSlow: 'Slow (Beginner)',
    language: 'Interface Language',
    french: 'Français',
    english: 'English'
  }
};

class KotobaApp {
  constructor() {
    this.activeTab = 'kana';
    this.currentKanaScript = 'hiragana';
    this.selectedKanaRow = 'all';
    this.selectedVocabCategory = 'all';
    this.currentLang = storage.getActiveProfile().settings.lang || 'fr';

    this.initDOM();
    this.bindEvents();
    this.render();
    this.registerServiceWorker();
  }

  t(key) {
    const dict = I18N[this.currentLang] || I18N.fr;
    return dict[key] || key;
  }

  initDOM() {
    this.el = {
      headerProfilePill: document.getElementById('header-profile-pill'),
      headerProfileName: document.getElementById('header-profile-name'),
      headerProfileAvatar: document.getElementById('header-profile-avatar'),
      btnSettings: document.getElementById('btn-settings'),
      contentArea: document.getElementById('content-area'),
      bottomNav: document.getElementById('bottom-nav'),
      navItems: document.querySelectorAll('.nav-item'),
      // Modals
      modalProfile: document.getElementById('modal-profile'),
      modalSettings: document.getElementById('modal-settings'),
      modalInstall: document.getElementById('modal-install'),
      modalProfileList: document.getElementById('modal-profile-list'),
      inputNewProfileName: document.getElementById('new-profile-name'),
      btnAddProfile: document.getElementById('btn-add-profile'),
      btnExportData: document.getElementById('btn-export-data'),
      fileImportData: document.getElementById('file-import-data'),
      selectLanguage: document.getElementById('setting-language'),
      selectAudioSpeed: document.getElementById('setting-audio-speed')
    };
  }

  bindEvents() {
    // Navigation
    this.el.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        if (tab) this.switchTab(tab);
      });
    });

    // Profile pill click
    this.el.headerProfilePill.addEventListener('click', () => {
      this.openProfileModal();
    });

    // Settings icon click
    this.el.btnSettings.addEventListener('click', () => {
      this.openSettingsModal();
    });

    // Modal Close buttons
    document.querySelectorAll('.modal-close, .modal-backdrop-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) modal.classList.remove('open');
      });
    });

    // Add Profile
    this.el.btnAddProfile.addEventListener('click', () => {
      const name = this.el.inputNewProfileName.value.trim();
      if (name) {
        const avatars = ['🌸', '🎋', '🎏', '🦊', '🍵', '🍙', '🏯', '🍜'];
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
        storage.createProfile(name, randomAvatar);
        this.el.inputNewProfileName.value = '';
        this.closeAllModals();
        this.render();
      }
    });

    // Settings changes
    this.el.selectLanguage.addEventListener('change', (e) => {
      this.currentLang = e.target.value;
      storage.updateSettings({ lang: this.currentLang });
      this.render();
    });

    this.el.selectAudioSpeed.addEventListener('change', (e) => {
      const speed = e.target.value;
      audio.setSpeed(speed);
      storage.updateSettings({ speed });
    });

    // Export Data
    this.el.btnExportData.addEventListener('click', () => {
      const jsonStr = storage.exportDataJson();
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `kotoba-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    // Import Data
    this.el.fileImportData.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const res = storage.importDataJson(event.target.result);
        if (res.success) {
          alert(`Sauvegarde restaurée avec succès ! (${res.count} profils)`);
          this.closeAllModals();
          this.render();
        } else {
          alert(`Erreur: ${res.error}`);
        }
      };
      reader.readAsText(file);
    });
  }

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  }

  openProfileModal() {
    this.renderProfileList();
    this.el.modalProfile.classList.add('open');
  }

  openSettingsModal() {
    const profile = storage.getActiveProfile();
    this.el.selectLanguage.value = profile.settings.lang || 'fr';
    this.el.selectAudioSpeed.value = profile.settings.speed || 'normal';
    this.el.modalSettings.classList.add('open');
  }

  switchTab(tabName) {
    audio.playChime('click');
    quizEngine.stopSpeedRound();
    this.activeTab = tabName;

    this.el.navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.tab === tabName);
    });

    this.render();
  }

  render() {
    const profile = storage.getActiveProfile();
    this.el.headerProfileName.textContent = profile.name;
    this.el.headerProfileAvatar.textContent = profile.avatar || '🌸';

    // Update bottom nav labels
    document.getElementById('nav-label-kana').textContent = this.t('navKana');
    document.getElementById('nav-label-vocab').textContent = this.t('navVocab');
    document.getElementById('nav-label-kanji').textContent = this.t('navKanji');
    document.getElementById('nav-label-practice').textContent = this.t('navPractice');
    document.getElementById('nav-label-family').textContent = this.t('navFamily');

    switch (this.activeTab) {
      case 'kana':
        this.renderKanaView();
        break;
      case 'vocab':
        this.renderVocabView();
        break;
      case 'kanji':
        this.renderKanjiView();
        break;
      case 'practice':
        this.renderPracticeMenu();
        break;
      case 'family':
        this.renderFamilyView();
        break;
    }
  }

  // ===================== KANA VIEW =====================
  renderKanaView() {
    const profile = storage.getActiveProfile();
    const kanaProgress = profile.kanaProgress || {};

    let html = `
      <div class="segmented-control">
        <button class="segment-btn ${this.currentKanaScript === 'hiragana' ? 'active' : ''}" id="btn-kana-hira">
          ${this.t('hiragana')} (あ)
        </button>
        <button class="segment-btn ${this.currentKanaScript === 'katakana' ? 'active' : ''}" id="btn-kana-kata">
          ${this.t('katakana')} (ア)
        </button>
      </div>

      <div class="vocab-category-scroll">
        <button class="category-chip ${this.selectedKanaRow === 'all' ? 'active' : ''}" data-row="all">
          ${this.t('allRows')}
        </button>
        ${KANA_ROWS.map(r => `
          <button class="category-chip ${this.selectedKanaRow === r.id ? 'active' : ''}" data-row="${r.id}">
            ${this.currentLang === 'fr' ? r.labelFr : r.labelEn}
          </button>
        `).join('')}
      </div>

      <div id="kana-sections">
    `;

    const rowsToRender = this.selectedKanaRow === 'all'
      ? KANA_ROWS
      : KANA_ROWS.filter(r => r.id === this.selectedKanaRow);

    rowsToRender.forEach(r => {
      const itemsInRow = KANA_DATA.filter(k => k.row === r.id);
      if (itemsInRow.length === 0) return;

      html += `
        <div class="kana-row-group">
          <div class="kana-row-header">
            <span class="kana-row-title">${this.currentLang === 'fr' ? r.labelFr : r.labelEn} (${r.name})</span>
            <span style="font-size: 0.75rem; color: var(--text-sub);">${itemsInRow.length} kana</span>
          </div>
          <div class="kana-grid">
            ${itemsInRow.map(item => {
              const char = this.currentKanaScript === 'katakana' ? item.katakana : item.hiragana;
              const status = kanaProgress[item.id]?.status || 'unseen';
              const mnemonic = this.currentLang === 'fr' ? item.mnemonicFr : item.mnemonicEn;

              return `
                <div class="kana-card ${status}" data-kana-id="${item.id}" data-char="${item.hiragana}" title="${mnemonic || ''}">
                  <span class="kana-status-dot"></span>
                  <div class="kana-char">${char}</div>
                  <div class="kana-romaji">${item.romaji}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    this.el.contentArea.innerHTML = html;

    // Kana script switch
    document.getElementById('btn-kana-hira').addEventListener('click', () => {
      this.currentKanaScript = 'hiragana';
      this.renderKanaView();
    });
    document.getElementById('btn-kana-kata').addEventListener('click', () => {
      this.currentKanaScript = 'katakana';
      this.renderKanaView();
    });

    // Row filter buttons
    this.el.contentArea.querySelectorAll('.category-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedKanaRow = btn.dataset.row;
        this.renderKanaView();
      });
    });

    // Kana card click -> Play audio + record review
    this.el.contentArea.querySelectorAll('.kana-card').forEach(card => {
      card.addEventListener('click', () => {
        const kanaId = card.dataset.kanaId;
        const char = card.dataset.char;
        audio.speak(char);
        card.classList.add('learning');
        storage.recordKanaReview(kanaId, true);
      });
    });
  }

  // ===================== VOCAB VIEW =====================
  renderVocabView() {
    let html = `
      <div class="vocab-category-scroll">
        <button class="category-chip ${this.selectedVocabCategory === 'all' ? 'active' : ''}" data-cat="all">
          ${this.t('allCategories')}
        </button>
        ${VOCAB_CATEGORIES.map(c => `
          <button class="category-chip ${this.selectedVocabCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
            ${c.icon} ${this.currentLang === 'fr' ? c.nameFr : c.nameEn}
          </button>
        `).join('')}
      </div>

      <div class="vocab-list">
    `;

    const filteredVocab = this.selectedVocabCategory === 'all'
      ? VOCAB_DATA
      : VOCAB_DATA.filter(v => v.category === this.selectedVocabCategory);

    filteredVocab.forEach(item => {
      const meaning = this.currentLang === 'fr' ? item.fr : item.en;

      html += `
        <div class="vocab-card" data-vocab-id="${item.id}" data-speak="${item.furigana || item.japanese}">
          <div class="vocab-main">
            <div class="vocab-jp-group">
              <div class="vocab-jp">${item.japanese}</div>
              ${item.furigana && item.furigana !== item.japanese ? `<div class="vocab-furigana">(${item.furigana})</div>` : ''}
              <div class="vocab-romaji">${item.romaji}</div>
            </div>
            <div class="vocab-meaning">${meaning}</div>
            ${item.notes ? `<div style="font-size:0.75rem; color:var(--text-sub); margin-top:3px;">💡 ${item.notes}</div>` : ''}
          </div>
          <button class="vocab-audio-btn" aria-label="Écouter">
            🔊
          </button>
        </div>
      `;
    });

    html += `</div>`;
    this.el.contentArea.innerHTML = html;

    // Filter clicks
    this.el.contentArea.querySelectorAll('.category-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedVocabCategory = btn.dataset.cat;
        this.renderVocabView();
      });
    });

    // Audio click on card
    this.el.contentArea.querySelectorAll('.vocab-card').forEach(card => {
      card.addEventListener('click', () => {
        const text = card.dataset.speak;
        audio.speak(text);
        storage.recordVocabReview(card.dataset.vocabId, true);
      });
    });
  }

  // ===================== KANJI VIEW =====================
  renderKanjiView() {
    let html = `
      <div style="margin-bottom: 14px; font-size: 0.85rem; color: var(--text-muted);">
        ${this.currentLang === 'fr'
          ? 'Les Kanji fondamentaux (N5). Appuyez sur un Kanji pour entendre sa prononciation.'
          : 'Foundational N5 Kanji. Tap any Kanji to listen to its pronunciation.'}
      </div>
      <div class="kanji-grid">
    `;

    KANJI_DATA.forEach(item => {
      const meaning = this.currentLang === 'fr' ? item.meaningFr : item.meaningEn;
      const sample = item.examples && item.examples.length > 0 ? item.examples[0] : null;

      html += `
        <div class="kanji-card" data-speak="${item.kanji}">
          <div class="kanji-top">
            <div class="kanji-glyph">${item.kanji}</div>
            <span class="kanji-strokes">${item.strokes} ${this.currentLang === 'fr' ? 'traits' : 'strokes'}</span>
          </div>
          <div class="kanji-meaning">${meaning}</div>
          <div class="kanji-readings">
            <div><strong>On:</strong> ${item.onyomi}</div>
            <div><strong>Kun:</strong> ${item.kunyomi}</div>
          </div>
          ${sample ? `
            <div style="font-size:0.75rem; color:var(--text-sub); border-top:1px solid var(--border-color); padding-top:6px; margin-top:4px;">
              Ex: <strong>${sample.word}</strong> (${sample.reading}) - ${this.currentLang === 'fr' ? sample.fr : sample.en}
            </div>
          ` : ''}
        </div>
      `;
    });

    html += `</div>`;
    this.el.contentArea.innerHTML = html;

    this.el.contentArea.querySelectorAll('.kanji-card').forEach(card => {
      card.addEventListener('click', () => {
        audio.speak(card.dataset.speak);
      });
    });
  }

  // ===================== PRACTICE / QUIZ VIEW =====================
  renderPracticeMenu() {
    let html = `
      <div class="quiz-menu-grid">
        <div class="quiz-card-btn" id="btn-mode-flashcards">
          <div class="quiz-icon-badge badge-sakura">🗂️</div>
          <div class="quiz-card-info">
            <h4>${this.t('modeFlashcards')}</h4>
            <p>${this.t('descFlashcards')}</p>
          </div>
        </div>

        <div class="quiz-card-btn" id="btn-mode-quiz">
          <div class="quiz-icon-badge badge-bamboo">🎯</div>
          <div class="quiz-card-info">
            <h4>${this.t('modeQuiz')}</h4>
            <p>${this.t('descQuiz')}</p>
          </div>
        </div>

        <div class="quiz-card-btn" id="btn-mode-listening">
          <div class="quiz-icon-badge badge-indigo">🎧</div>
          <div class="quiz-card-info">
            <h4>${this.t('modeListening')}</h4>
            <p>${this.t('descListening')}</p>
          </div>
        </div>

        <div class="quiz-card-btn" id="btn-mode-speed">
          <div class="quiz-icon-badge badge-gold">⚡</div>
          <div class="quiz-card-info">
            <h4>${this.t('modeSpeed')}</h4>
            <p>${this.t('descSpeed')}</p>
          </div>
        </div>
      </div>
    `;

    this.el.contentArea.innerHTML = html;

    document.getElementById('btn-mode-flashcards').addEventListener('click', () => this.startFlashcards());
    document.getElementById('btn-mode-quiz').addEventListener('click', () => this.startQuiz('kana'));
    document.getElementById('btn-mode-listening').addEventListener('click', () => this.startQuiz('listening'));
    document.getElementById('btn-mode-speed').addEventListener('click', () => this.startSpeedRound());
  }

  // --- FLASHCARDS CONTROLLER ---
  startFlashcards() {
    const deck = quizEngine.initFlashcards({ type: 'kana', script: this.currentKanaScript });
    if (!deck || deck.length === 0) return;
    this.renderActiveFlashcard();
  }

  renderActiveFlashcard() {
    const cardData = quizEngine.getCurrentCard();
    if (!cardData) {
      this.renderQuizSummary(quizEngine.score, quizEngine.currentDeck.length, 'flashcards');
      return;
    }

    const { card, index, total } = cardData;
    const progressPercent = Math.round((index / total) * 100);
    const mnemonic = this.currentLang === 'fr' ? card.mnemonicFr : card.mnemonicEn;

    let html = `
      <div class="quiz-active-view">
        <div class="quiz-header-status">
          <span>🗂️ Flashcard ${index} / ${total}</span>
          <button class="icon-btn" id="btn-exit-quiz" style="width:28px; height:28px; font-size:0.8rem;">✕</button>
        </div>

        <div class="quiz-progress-bar-wrap">
          <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="flashcard-container" id="active-flashcard">
          <div class="flashcard-inner" id="flashcard-inner">
            <!-- Front -->
            <div class="flashcard-front">
              <div class="flashcard-glyph">${card.primary}</div>
              <div class="flashcard-hint">${this.t('flipCard')}</div>
            </div>
            <!-- Back -->
            <div class="flashcard-back">
              <div class="flashcard-answer">${card.romaji}</div>
              ${card.secondary ? `<div style="font-size:1.1rem; color:var(--text-muted);">${card.secondary}</div>` : ''}
              ${mnemonic ? `<div class="flashcard-mnemonic">💡 ${mnemonic}</div>` : ''}
              <button class="vocab-audio-btn" id="btn-card-audio" style="margin-top:16px;">🔊</button>
            </div>
          </div>
        </div>

        <div class="flashcard-controls">
          <button class="btn-flashcard btn-again" id="btn-card-again">
            ↩️ ${this.t('needPractice')}
          </button>
          <button class="btn-flashcard btn-knew" id="btn-card-knew">
            ✨ ${this.t('knewIt')}
          </button>
        </div>
      </div>
    `;

    this.el.contentArea.innerHTML = html;

    const cardEl = document.getElementById('active-flashcard');
    const innerEl = document.getElementById('flashcard-inner');

    cardEl.addEventListener('click', (e) => {
      if (e.target.closest('#btn-card-audio')) return;
      innerEl.classList.toggle('flipped');
      audio.speak(card.speechText);
    });

    const audioBtn = document.getElementById('btn-card-audio');
    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        audio.speak(card.speechText);
      });
    }

    document.getElementById('btn-card-again').addEventListener('click', () => {
      quizEngine.advanceCard(false);
      this.renderActiveFlashcard();
    });

    document.getElementById('btn-card-knew').addEventListener('click', () => {
      quizEngine.advanceCard(true);
      this.renderActiveFlashcard();
    });

    document.getElementById('btn-exit-quiz').addEventListener('click', () => {
      this.renderPracticeMenu();
    });
  }

  // --- MULTIPLE CHOICE QUIZ CONTROLLER ---
  startQuiz(type = 'kana') {
    quizEngine.initMultipleChoice({ type, script: this.currentKanaScript, count: 10 });
    this.renderActiveQuestion();
  }

  renderActiveQuestion() {
    const qData = quizEngine.getCurrentQuestion();
    if (!qData) {
      this.renderQuizSummary(quizEngine.score, quizEngine.currentDeck.length, quizEngine.quizType);
      return;
    }

    const { question, index, total } = qData;
    const progressPercent = Math.round((index / total) * 100);

    // Auto-play audio if listening challenge
    if (question.type === 'listening') {
      setTimeout(() => audio.speak(question.speechText), 200);
    }

    let html = `
      <div class="quiz-active-view">
        <div class="quiz-header-status">
          <span>Question ${index} / ${total}</span>
          <button class="icon-btn" id="btn-exit-quiz" style="width:28px; height:28px; font-size:0.8rem;">✕</button>
        </div>

        <div class="quiz-progress-bar-wrap">
          <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="quiz-question-box" id="question-box">
          <div class="quiz-prompt">${question.prompt}</div>
          <div class="quiz-prompt-sub">${question.promptSub || ''}</div>
          ${question.speechText ? `
            <button class="vocab-audio-btn" id="btn-q-audio" style="margin: 12px auto 0 auto;">🔊</button>
          ` : ''}
        </div>

        <div class="quiz-options-grid">
          ${question.options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">
              <div>${opt.text}</div>
              ${opt.sub ? `<div style="font-size:0.75rem; font-weight:normal; opacity:0.8;">${opt.sub}</div>` : ''}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    this.el.contentArea.innerHTML = html;

    const audioBtn = document.getElementById('btn-q-audio');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => audio.speak(question.speechText));
    }

    document.getElementById('btn-exit-quiz').addEventListener('click', () => {
      this.renderPracticeMenu();
    });

    const optButtons = this.el.contentArea.querySelectorAll('.quiz-option-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.dataset.index, 10);
        const result = quizEngine.submitAnswer(selectedIdx);
        if (!result) return;

        // Visual feedback
        if (result.isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
          // Highlight the correct one
          if (optButtons[result.correctIndex]) {
            optButtons[result.correctIndex].classList.add('correct');
          }
        }

        // Auto advance after short pause
        setTimeout(() => {
          quizEngine.nextQuestion();
          this.renderActiveQuestion();
        }, 1100);
      });
    });
  }

  // --- 60-SECOND SPEED SPRINT ---
  startSpeedRound() {
    const onTick = (timeLeft) => {
      const timerEl = document.getElementById('speed-timer');
      if (timerEl) timerEl.textContent = `${timeLeft}s`;
    };

    const onFinish = (score, total) => {
      this.renderQuizSummary(score, total, 'speed_60s');
    };

    quizEngine.initSpeedRound(onTick, onFinish);
    this.renderActiveSpeedQuestion();
  }

  renderActiveSpeedQuestion() {
    const qData = quizEngine.getCurrentQuestion();
    if (!qData) {
      this.renderQuizSummary(quizEngine.score, quizEngine.currentIndex, 'speed_60s');
      return;
    }

    const { question } = qData;

    let html = `
      <div class="quiz-active-view">
        <div class="quiz-header-status">
          <span style="color: var(--accent-gold); font-weight:800; font-size:1.1rem;" id="speed-timer">${quizEngine.timeLeft}s</span>
          <span style="font-size:1.1rem; font-weight:700;">Score: <strong>${quizEngine.score}</strong></span>
          <button class="icon-btn" id="btn-exit-speed" style="width:28px; height:28px; font-size:0.8rem;">✕</button>
        </div>

        <div class="quiz-question-box">
          <div class="quiz-prompt">${question.prompt}</div>
          <div class="quiz-prompt-sub">${question.promptSub || ''}</div>
        </div>

        <div class="quiz-options-grid">
          ${question.options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">
              ${opt.text}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    this.el.contentArea.innerHTML = html;

    document.getElementById('btn-exit-speed').addEventListener('click', () => {
      quizEngine.stopSpeedRound();
      this.renderPracticeMenu();
    });

    const optButtons = this.el.contentArea.querySelectorAll('.quiz-option-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.dataset.index, 10);
        const result = quizEngine.submitAnswer(selectedIdx);
        if (!result) return;

        if (result.isCorrect) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }

        setTimeout(() => {
          quizEngine.nextQuestion();
          this.renderActiveSpeedQuestion();
        }, 300);
      });
    });
  }

  // --- QUIZ SUMMARY VIEW ---
  renderQuizSummary(score, total, mode) {
    audio.playChime('success');
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;

    let trophy = '🥉';
    let msg = 'Bien joué ! Continuez votre pratique.';
    if (pct >= 90) {
      trophy = '🏆';
      msg = 'Incroyable ! Performance parfaite !';
    } else if (pct >= 70) {
      trophy = '🥈';
      msg = 'Très bon travail ! Vous progressez vite.';
    }

    let html = `
      <div class="quiz-summary-card">
        <div class="summary-trophy">${trophy}</div>
        <div class="summary-score">${score} / ${total}</div>
        <div class="summary-msg">${msg}</div>

        <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
          <button class="btn-primary" id="btn-summary-retry">
            🔄 ${this.t('retryBtn')}
          </button>
          <button class="btn-secondary" id="btn-summary-menu">
            🏠 ${this.t('quitBtn')}
          </button>
        </div>
      </div>
    `;

    this.el.contentArea.innerHTML = html;

    document.getElementById('btn-summary-retry').addEventListener('click', () => {
      if (mode === 'flashcards') this.startFlashcards();
      else if (mode === 'speed_60s') this.startSpeedRound();
      else this.startQuiz(mode);
    });

    document.getElementById('btn-summary-menu').addEventListener('click', () => {
      this.renderPracticeMenu();
    });
  }

  // ===================== FAMILY & STATS VIEW =====================
  renderFamilyView() {
    const profile = storage.getActiveProfile();
    const stats = storage.getProfileStats(profile);
    const allProfiles = storage.getAllProfiles();

    let html = `
      <!-- Hero Banner with Streak -->
      <div class="family-hero-card">
        <div class="family-hero-text">
          <h3>${profile.avatar} ${profile.name}</h3>
          <p>${stats.streakDays} ${this.t('streakTitle')}</p>
        </div>
        <div class="family-streak-badge">
          <div class="streak-number">🔥 ${stats.streakDays}</div>
          <div class="streak-label">Streak</div>
        </div>
      </div>

      <!-- Quick Install Banner for iPhone / Mac -->
      <div class="install-banner" id="banner-install" style="cursor:pointer;">
        <span style="font-size:1.8rem;">📲</span>
        <div class="install-banner-text">
          <h5>${this.t('installTitle')}</h5>
          <p>${this.t('installDesc')}</p>
        </div>
        <span style="font-size:1.2rem; color:var(--text-sub);">›</span>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-box">
          <div class="stat-val" style="color: var(--accent-bamboo);">${stats.kanaMastered}</div>
          <div class="stat-label">${this.t('kanaMastered')}</div>
        </div>
        <div class="stat-box">
          <div class="stat-val" style="color: var(--accent-sakura);">${stats.vocabMastered}</div>
          <div class="stat-label">${this.t('vocabMastered')}</div>
        </div>
        <div class="stat-box">
          <div class="stat-val" style="color: var(--accent-indigo);">${stats.totalQuizzes}</div>
          <div class="stat-label">${this.t('quizzesCompleted')}</div>
        </div>
        <div class="stat-box">
          <div class="stat-val" style="color: var(--accent-gold);">${stats.avgScore}%</div>
          <div class="stat-label">${this.t('accuracy')}</div>
        </div>
      </div>

      <!-- Family Members List -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <h4 style="font-size: 1rem; font-weight:700;">${this.t('familyLearners')}</h4>
        <button class="icon-btn" id="btn-family-add" style="width:32px; height:32px;">＋</button>
      </div>

      <div class="profile-list">
        ${allProfiles.map(p => {
          const pStats = storage.getProfileStats(p);
          const isActive = p.id === profile.id;
          return `
            <div class="profile-item ${isActive ? 'active-profile' : ''}" data-profile-id="${p.id}">
              <div class="profile-item-left">
                <span class="profile-avatar">${p.avatar || '🌸'}</span>
                <div>
                  <div class="profile-name">${p.name} ${isActive ? '✓' : ''}</div>
                  <div class="profile-detail">🔥 ${pStats.streakDays}j • 🈴 ${pStats.kanaMastered} kana • 🎯 ${pStats.avgScore}%</div>
                </div>
              </div>
              <span style="font-size:0.9rem; color:var(--text-muted);">›</span>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Action Buttons (Backup & Restore) -->
      <div style="display:flex; gap:10px; margin-top:20px;">
        <button class="btn-secondary" id="btn-export-quick">
          💾 ${this.t('exportBackup')}
        </button>
      </div>
    `;

    this.el.contentArea.innerHTML = html;

    // Profile item click -> switch
    this.el.contentArea.querySelectorAll('.profile-item').forEach(item => {
      item.addEventListener('click', () => {
        storage.switchProfile(item.dataset.profileId);
        this.render();
      });
    });

    document.getElementById('btn-family-add').addEventListener('click', () => {
      this.openProfileModal();
    });

    document.getElementById('banner-install').addEventListener('click', () => {
      this.el.modalInstall.classList.add('open');
    });

    document.getElementById('btn-export-quick').addEventListener('click', () => {
      this.el.btnExportData.click();
    });
  }

  renderProfileList() {
    const allProfiles = storage.getAllProfiles();
    const activeId = storage.getActiveProfile().id;

    let html = allProfiles.map(p => `
      <div class="profile-item ${p.id === activeId ? 'active-profile' : ''}" style="margin-bottom:8px;">
        <div class="profile-item-left" style="cursor:pointer;" data-switch-id="${p.id}">
          <span class="profile-avatar">${p.avatar}</span>
          <div class="profile-name">${p.name}</div>
        </div>
        ${allProfiles.length > 1 ? `
          <button class="icon-btn" data-delete-id="${p.id}" style="width:28px; height:28px; font-size:0.8rem; color:var(--accent-red);">🗑️</button>
        ` : ''}
      </div>
    `).join('');

    this.el.modalProfileList.innerHTML = html;

    this.el.modalProfileList.querySelectorAll('[data-switch-id]').forEach(el => {
      el.addEventListener('click', () => {
        storage.switchProfile(el.dataset.switchId);
        this.closeAllModals();
        this.render();
      });
    });

    this.el.modalProfileList.querySelectorAll('[data-delete-id]').forEach(el => {
      el.addEventListener('click', () => {
        if (confirm('Supprimer ce profil et ses statistiques ?')) {
          storage.deleteProfile(el.dataset.deleteId);
          this.renderProfileList();
          this.render();
        }
      });
    });
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Kotoba Service Worker registered.'))
        .catch(err => console.warn('Service Worker failed:', err));
    }
  }
}

// Launch app on load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new KotobaApp();
});
