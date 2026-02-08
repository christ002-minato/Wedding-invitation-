# 🌹 Site de Mariage - Augustin & Chantal

Site d'invitation de mariage thème "Les Roses Chrétiennes"

## 🎵 Comment ajouter votre musique romantique

### Option 1 : Utiliser une URL de musique en ligne

1. Ouvrez le fichier `/components/BackgroundMusic.tsx`
2. Trouvez la ligne avec `YOUR_MUSIC_URL_HERE.mp3`
3. Remplacez-la par l'URL de votre fichier audio

**Exemple :**
```typescript
<source
  src="https://www.votre-site.com/musique-romantique.mp3"
  type="audio/mpeg"
/>
```

### Option 2 : Héberger la musique sur Dropbox

1. Téléchargez votre fichier MP3 sur Dropbox
2. Créez un lien de partage
3. Remplacez `dl=0` par `dl=1` à la fin de l'URL
4. Utilisez cette URL dans le composant

**Exemple :**
```
https://www.dropbox.com/s/xxxxx/musique.mp3?dl=1
```

### Option 3 : Utiliser Google Drive

1. Téléchargez votre fichier sur Google Drive
2. Clic droit → Obtenir le lien → Modifier l'accès en "Tous les utilisateurs disposant du lien"
3. Récupérez l'ID du fichier
4. Utilisez cette URL : `https://drive.google.com/uc?export=download&id=VOTRE_ID`

### Option 4 : Services de musique libre de droits

**Sites recommandés pour musique romantique gratuite :**
- [Pixabay Music](https://pixabay.com/music/) - Musique libre de droits
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)

**Mots-clés de recherche :**
- "Romantic Piano"
- "Wedding Music"
- "Love Song Instrumental"
- "Christian Wedding Music"

### 📝 Format recommandé

- **Format :** MP3 (compatible tous navigateurs)
- **Durée :** 3-5 minutes (en boucle automatique)
- **Qualité :** 128-192 kbps (bon équilibre qualité/taille)
- **Volume :** Normalisé pour ne pas être trop fort

### 🎛️ Fonctionnalités du lecteur audio

✅ **Lecture automatique** au chargement (si autorisé par le navigateur)
✅ **Bouton Play/Pause** flottant en bas à droite
✅ **Bouton Mute/Unmute** pour contrôler le volume
✅ **Animation de cœurs et roses** quand la musique joue
✅ **Lecture en boucle** automatique
✅ **Mémorisation** - ne se relance pas à chaque visite

### ⚠️ Note importante

Les navigateurs modernes (Chrome, Safari, etc.) bloquent la lecture automatique de l'audio.
L'utilisateur devra peut-être cliquer sur le bouton Play pour lancer la musique.

---

## 🌹 Séparateurs de roses

Le site inclut maintenant de magnifiques séparateurs de roses entre chaque section :

- **Variant "full"** : Image pleine hauteur avec overlay et cœurs
- **Variant "overlay"** : Image en arrière-plan subtile avec ornement de rose
- **Variant "default"** : Image simple avec dégradé

---

## 🎨 Thème

**Couleurs principales :**
- Rouge bordeaux (#991b1b)
- Rouge vif (#dc2626)
- Rose tendre (#fda4af)
- Blanc crème (#FFFCF7)

**Éléments chrétiens :**
- Citations bibliques
- Icônes de fleurs et cœurs
- Branches d'olivier

---

## 🏢 Développé par S-HUB

Site conçu avec amour par l'agence digitale S-HUB
