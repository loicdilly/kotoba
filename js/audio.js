// Audio Engine: Native Web Speech Synthesis for Japanese + Web Audio synth effects
class AudioManager {
  constructor() {
    this.speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window;
    this.voice = null;
    this.rate = 0.9; // Slightly slower than normal for clearer pronunciation
    this.audioCtx = null;

    if (this.speechAvailable && typeof window !== 'undefined') {
      this.initVoices();
      if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.speechAvailable) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize high-quality Japanese voices (Kyoko, Otoya, Hattori, or any ja-JP)
    this.voice = voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP' || v.lang.startsWith('ja')) || null;
  }

  setSpeed(speed = 'normal') {
    this.rate = speed === 'slow' ? 0.65 : 0.9;
  }

  speak(text) {
    if (!this.speechAvailable || !text) return;

    try {
      // Cancel any ongoing speech for responsiveness
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = this.rate;
      utterance.pitch = 1.0;

      if (this.voice) {
        utterance.voice = this.voice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }

  // Pleasant Web Audio UI feedback sounds
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playChime(type = 'success') {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'success') {
        // Japanese temple chime / happy chord
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'error') {
        // Gentle wrong tone (non-harsh)
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.18);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'click') {
        // Subtle soft wooden tap
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      }
    } catch (e) {
      // Ignore audio context errors silently
    }
  }
}

export const audio = new AudioManager();
