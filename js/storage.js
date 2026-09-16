// Multi-Profile Storage & Progress Management Engine
const STORAGE_KEY = 'kotoba_japanese_v1';

const DEFAULT_PROFILES = [
  { id: 'p_1', name: 'Apprenant 1', avatar: '🌸' },
  { id: 'p_2', name: 'Apprenant 2', avatar: '🎏' }
];

class StorageManager {
  constructor() {
    this.data = this.load();
    this.checkStreak();
  }

  load() {
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.profiles && parsed.profiles.length > 0) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.error('Failed to parse localStorage data:', e);
    }

    // Default initial data
    const initial = {
      activeProfileId: 'p_1',
      profiles: [
        {
          id: 'p_1',
          name: 'Moi',
          avatar: '🌸',
          createdAt: Date.now(),
          streak: { count: 1, lastActiveDate: this.todayStr() },
          kanaProgress: {}, // kanaId -> { score: number, status: 'learning'|'mastered' }
          vocabProgress: {},
          quizHistory: [],
          settings: { lang: 'fr', speed: 'normal', theme: 'system', kanaScript: 'hiragana' }
        }
      ]
    };
    this.save(initial);
    return initial;
  }

  save(dataToSave = this.data) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      }
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }

  todayStr() {
    return new Date().toISOString().split('T')[0];
  }

  getActiveProfile() {
    const profile = this.data.profiles.find(p => p.id === this.data.activeProfileId);
    return profile || this.data.profiles[0];
  }

  getAllProfiles() {
    return this.data.profiles;
  }

  switchProfile(profileId) {
    if (this.data.profiles.some(p => p.id === profileId)) {
      this.data.activeProfileId = profileId;
      this.checkStreak();
      this.save();
      return true;
    }
    return false;
  }

  createProfile(name, avatar = '🎋') {
    const newId = 'p_' + Date.now();
    const newProfile = {
      id: newId,
      name: name.trim() || 'Nouveau',
      avatar: avatar || '🎋',
      createdAt: Date.now(),
      streak: { count: 1, lastActiveDate: this.todayStr() },
      kanaProgress: {},
      vocabProgress: {},
      quizHistory: [],
      settings: { lang: 'fr', speed: 'normal', theme: 'system', kanaScript: 'hiragana' }
    };
    this.data.profiles.push(newProfile);
    this.data.activeProfileId = newId;
    this.save();
    return newProfile;
  }

  deleteProfile(profileId) {
    if (this.data.profiles.length <= 1) {
      alert('Impossible de supprimer le dernier profil.');
      return false;
    }
    this.data.profiles = this.data.profiles.filter(p => p.id !== profileId);
    if (this.data.activeProfileId === profileId) {
      this.data.activeProfileId = this.data.profiles[0].id;
    }
    this.save();
    return true;
  }

  updateSettings(newSettings) {
    const profile = this.getActiveProfile();
    profile.settings = { ...profile.settings, ...newSettings };
    this.save();
  }

  checkStreak() {
    const profile = this.getActiveProfile();
    if (!profile.streak) {
      profile.streak = { count: 1, lastActiveDate: this.todayStr() };
      this.save();
      return;
    }

    const today = this.todayStr();
    const last = profile.streak.lastActiveDate;

    if (last === today) {
      // Already checked in today
      return;
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (last === yesterday) {
      // Continued streak!
      profile.streak.count += 1;
      profile.streak.lastActiveDate = today;
    } else {
      // Streak broken, restart
      profile.streak.count = 1;
      profile.streak.lastActiveDate = today;
    }
    this.save();
  }

  recordKanaReview(kanaId, isCorrect) {
    const profile = this.getActiveProfile();
    if (!profile.kanaProgress) profile.kanaProgress = {};

    const current = profile.kanaProgress[kanaId] || { score: 0, status: 'learning' };
    if (isCorrect) {
      current.score = Math.min((current.score || 0) + 1, 5);
      if (current.score >= 3) {
        current.status = 'mastered';
      } else {
        current.status = 'learning';
      }
    } else {
      current.score = Math.max((current.score || 0) - 1, 0);
      current.status = 'learning';
    }
    current.lastReviewed = Date.now();
    profile.kanaProgress[kanaId] = current;
    this.checkStreak();
    this.save();
    return current;
  }

  recordVocabReview(vocabId, isCorrect) {
    const profile = this.getActiveProfile();
    if (!profile.vocabProgress) profile.vocabProgress = {};

    const current = profile.vocabProgress[vocabId] || { score: 0, status: 'learning' };
    if (isCorrect) {
      current.score = Math.min((current.score || 0) + 1, 5);
      if (current.score >= 3) {
        current.status = 'mastered';
      } else {
        current.status = 'learning';
      }
    } else {
      current.score = Math.max((current.score || 0) - 1, 0);
      current.status = 'learning';
    }
    current.lastReviewed = Date.now();
    profile.vocabProgress[vocabId] = current;
    this.checkStreak();
    this.save();
    return current;
  }

  recordQuizResult(mode, score, total) {
    const profile = this.getActiveProfile();
    if (!profile.quizHistory) profile.quizHistory = [];

    const entry = {
      date: new Date().toISOString(),
      mode,
      score,
      total,
      percentage: Math.round((score / total) * 100)
    };
    profile.quizHistory.unshift(entry);
    // Keep max 50 recent tests
    if (profile.quizHistory.length > 50) {
      profile.quizHistory.pop();
    }
    this.checkStreak();
    this.save();
    return entry;
  }

  getProfileStats(profile = this.getActiveProfile()) {
    const kanaProg = profile.kanaProgress || {};
    const vocabProg = profile.vocabProgress || {};

    const kanaTotalReviewed = Object.keys(kanaProg).length;
    const kanaMastered = Object.values(kanaProg).filter(k => k.status === 'mastered').length;

    const vocabTotalReviewed = Object.keys(vocabProg).length;
    const vocabMastered = Object.values(vocabProg).filter(v => v.status === 'mastered').length;

    const totalQuizzes = (profile.quizHistory || []).length;
    const avgScore = totalQuizzes > 0
      ? Math.round(profile.quizHistory.reduce((acc, q) => acc + q.percentage, 0) / totalQuizzes)
      : 0;

    return {
      name: profile.name,
      avatar: profile.avatar,
      streakDays: profile.streak?.count || 1,
      kanaMastered,
      kanaTotalReviewed,
      vocabMastered,
      vocabTotalReviewed,
      totalQuizzes,
      avgScore
    };
  }

  exportDataJson() {
    return JSON.stringify(this.data, null, 2);
  }

  importDataJson(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.profiles && Array.isArray(parsed.profiles) && parsed.profiles.length > 0) {
        this.data = parsed;
        this.save();
        return { success: true, count: parsed.profiles.length };
      }
      return { success: false, error: 'Format invalide (aucun profil détecté)' };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }
}

export const storage = new StorageManager();
