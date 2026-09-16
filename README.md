# Kotoba (言葉) — Application d'Apprentissage du Japonais

Une application moderne, simple et rapide pour apprendre le japonais en famille sur **iPhone, iPad et Mac**, hébergée gratuitement sur **GitHub Pages**.

![Kotoba App Icon](icons/icon.svg)

---

## ✨ Fonctionnalités Principales

- **🈴 Maîtrise des Kana (Hiragana & Katakana)** :
  - Grilles complètes avec audio haute fidélité (`ja-JP`).
  - Sons de base (46 Gojūon), sons voisés (Dakuon/Handakuon) et combinaisons (Yōon).
  - Mnémoniques visuels en français et en anglais.
- **🗣️ Prononciation Japonaise Intégrée** :
  - Synthèse vocale japonaise native (Web Speech API) sans aucune clé API requise.
  - Vitesse d'élocution réglable : Normale ou Lente (pour débutants).
- **📖 Vocabulaire Thématique de Survie** :
  - Salutations, Chiffres & Prix, Nourriture & Restaurant, Voyage & Transports, Famille & Quotidien, Phrases indispensables.
  - Écritures en Kanji avec **Furigana** (lecture au-dessus) et Romaji.
- **🎯 4 Modes d'Entraînement** :
  - **Cartes Mémoire (Flashcards 3D)** : Retournez la carte, écoutez l'audio et validez vos acquis.
  - **Quiz Choix Multiple** : 10 questions rapides avec score immédiat.
  - **Quiz Écoute & Audio** : Entraînez votre oreille aux sons japonais naturels.
  - **Défi Vitesse 60s** : Une minute chrono pour battre le record de la famille !
- **👨‍👩‍👧‍👦 Conçu pour la Famille & Partage** :
  - Sélecteur de profils d'apprenants (ex: *Moi, Nils, Elle, Papa, Maman*).
  - Suivi des séries (streaks quotidiens), kana maîtrisés et scores séparés par profil.
  - Sauvegarde et transfert faciles en un clic (Export JSON).
- **📱 PWA 100% Hors-Ligne** :
  - Fonctionne même dans l'avion ou sans connexion internet grâce au Service Worker.
  - S'installe directement sur l'écran d'accueil de l'iPhone comme une vraie application native (plein écran sans barre de navigation).

---

## 🚀 Comment déployer sur GitHub Pages (en 2 minutes)

Cette application est **100% statique (HTML/CSS/JS natif ES Modules)** : aucun serveur ni étape de compilation (`npm build`) n'est nécessaire.

### Étape 1 : Créer votre dépôt sur GitHub
1. Rendez-vous sur [github.com/new](https://github.com/new).
2. Nommez le dépôt (par exemple `kotoba` ou `japanese-app`).
3. Laissez le dépôt **Public** et ne cochez pas "Add a README file" (puisqu'il existe déjà ici).
4. Cliquez sur **Create repository**.

### Étape 2 : Publier le code depuis votre Mac
Ouvrez un Terminal dans le dossier de l'application et lancez les commandes suivantes :

```bash
cd /Users/dillyloic/Documents/japanese-app

# Initialiser git
git init
git add .
git commit -m "Initial commit: Kotoba Japanese App"
git branch -M main

# Relier à votre dépôt GitHub (remplacez VOTRE-NOM-UTILISATEUR par votre pseudo GitHub)
git remote add origin https://github.com/VOTRE-NOM-UTILISATEUR/kotoba.git
git push -u origin main
```

### Étape 3 : Activer GitHub Pages
1. Dans votre dépôt sur GitHub, allez dans l'onglet **Settings** (Paramètres).
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Sous **Build and deployment** > **Source**, sélectionnez **Deploy from a branch**.
4. Sous Branch, choisissez **main** et dossier `/(root)`, puis cliquez sur **Save**.
5. Après environ 1 minute, votre application sera accessible en ligne à l'adresse :
   ```
   https://VOTRE-NOM-UTILISATEUR.github.io/kotoba/
   ```

---

## 📲 Installer sur iPhone & iPad (Mode Application Native)

1. Ouvrez l'URL de votre site sur **Safari** sur votre iPhone.
2. Appuyez sur le bouton **Partager** (l'icône avec un carré et une flèche vers le haut ⎋ en bas de l'écran).
3. Faites défiler vers le bas et touchez **"Sur l'écran d'accueil"** (*Add to Home Screen*).
4. Touchez **Ajouter** en haut à droite.
5. L'icône Kotoba apparaît sur votre écran d'accueil et s'ouvre en plein écran comme une application de l'App Store !

---

## 💻 Installer sur Mac

- **Dans Safari** : Allez dans le menu supérieur `Fichier` > `Ajouter au Dock...`.
- **Dans Google Chrome / Edge** : Cliquez sur la petite icône d'installation située tout à droite de la barre d'adresse.

---

## 🛠️ Tester en local sur votre Mac

Pour lancer l'application immédiatement en local :
```bash
cd /Users/dillyloic/Documents/japanese-app
python3 -m http.server 8080
```
Puis ouvrez [http://localhost:8080](http://localhost:8080) dans votre navigateur.
