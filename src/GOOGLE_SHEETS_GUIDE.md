# 📊 Guide : Connecter le formulaire RSVP à Google Sheets

## 🎯 Objectif
Enregistrer automatiquement les réponses du formulaire RSVP dans un Google Sheet pour suivre facilement les confirmations de présence.

---

## ✅ Méthode 1 : Utiliser Google Apps Script (RECOMMANDÉ - Gratuit)

### Étape 1 : Créer le Google Sheet
1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez un nouveau Google Sheet nommé "RSVP Mariage Augustin & Chantal"
3. Dans la première ligne, créez les colonnes suivantes :
   - A1 : **Date**
   - B1 : **Nom & Prénom**
   - C1 : **Présence**
   - D1 : **Nombre de Personnes**
   - E1 : **Message**
   - F1 : **WhatsApp**

### Étape 2 : Créer le Script Google Apps Script
1. Dans votre Google Sheet, cliquez sur **Extensions** → **Apps Script**
2. Supprimez le code par défaut
3. Copiez-collez ce code :

```javascript
function doPost(e) {
  try {
    // Ouvrir le Google Sheet (remplacez par votre URL de sheet)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Récupérer les données du formulaire
    var data = JSON.parse(e.postData.contents);
    
    // Ajouter une nouvelle ligne avec les données
    sheet.appendRow([
      new Date(), // Date et heure
      data.name,
      data.attendance === "present" ? "Présent(e)" : "Absent(e)",
      data.guests || "N/A",
      data.message || "",
      data.whatsapp || ""
    ]);
    
    // Retourner une réponse de succès
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Réponse enregistrée avec succès"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Retourner une réponse d'erreur
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Cliquez sur **Enregistrer** (icône disquette)
5. Cliquez sur **Déployer** → **Nouveau déploiement**
6. Sélectionnez **Application Web**
7. Configurez :
   - **Description** : "API RSVP Mariage"
   - **Exécuter en tant que** : Moi
   - **Qui a accès** : Tout le monde
8. Cliquez sur **Déployer**
9. **COPIEZ L'URL DU DÉPLOIEMENT** (elle ressemble à : `https://script.google.com/macros/s/XXXXX/exec`)

### Étape 3 : Modifier le fichier RSVPSection.tsx
Remplacez la fonction `handleSubmit` dans `/components/RSVPSection.tsx` :

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Remplacez par l'URL de votre Google Apps Script
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxVW-TWdrfY3ApORNl5v6yjJodXAf1YgMoZG_VrZA5vk2rSu8YMX3N3keBHpYC-HNui/exec";
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Important pour éviter les erreurs CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    setIsSubmitted(true);
    toast.success("Confirmation envoyée avec succès !", {
      description: "Nous avons bien reçu votre réponse. Merci !",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        attendance: "present",
        guests: "1",
        message: "",
        whatsapp: "",
      });
    }, 3000);
    
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    toast.error("Erreur lors de l'envoi", {
      description: "Veuillez réessayer plus tard.",
    });
  }
};
```

---

## ✅ Méthode 2 : Utiliser Supabase (Base de données professionnelle)

### Avantages de Supabase :
- ✅ Base de données PostgreSQL complète
- ✅ API automatique générée
- ✅ Interface d'administration pour voir les réponses
- ✅ Gratuit jusqu'à 500 Mo de stockage
- ✅ Plus sécurisé et professionnel

### Comment connecter à Supabase :
Je peux vous aider à configurer Supabase directement depuis Figma Make. Il suffit de me demander et je lancerai le processus de connexion !

---

## ✅ Méthode 3 : Utiliser un service tiers (SheetDB, Sheety)

### SheetDB (sheetdb.io)
1. Allez sur [SheetDB.io](https://sheetdb.io)
2. Créez un compte gratuit
3. Connectez votre Google Sheet
4. Obtenez l'URL de l'API
5. Utilisez cette URL dans le code du formulaire

### Sheety (sheety.co)
1. Allez sur [Sheety.co](https://sheety.co)
2. Créez un compte gratuit
3. Connectez votre Google Sheet
4. Obtenez l'URL de l'API
5. Utilisez cette URL dans le code du formulaire

---

## 📌 Quelle méthode choisir ?

| Méthode | Difficulté | Coût | Sécurité | Recommandation |
|---------|-----------|------|----------|----------------|
| **Google Apps Script** | ⭐⭐ Moyenne | 🆓 Gratuit | ⭐⭐⭐ Bonne | ✅ **RECOMMANDÉ pour commencer** |
| **Supabase** | ⭐⭐⭐ Facile | 🆓 Gratuit | ⭐⭐⭐⭐⭐ Excellente | ✅ **RECOMMANDÉ pour production** |
| **SheetDB/Sheety** | ⭐ Facile | 💰 Payant après limite | ⭐⭐⭐ Bonne | ⚠️ Limité en version gratuite |

---

## 🎯 Mon Conseil

**Pour votre mariage, je recommande Google Apps Script** car :
- ✅ Totalement gratuit
- ✅ Les données restent dans votre Google Drive
- ✅ Facile à configurer (15 minutes)
- ✅ Vous pouvez facilement exporter les données
- ✅ Pas de limite de réponses

**Si vous voulez quelque chose de plus professionnel :**
- Utilisez **Supabase** (je peux vous aider à le configurer maintenant)

---

## 💡 Besoin d'aide ?

Si vous souhaitez que je vous aide à configurer Supabase ou que je modifie le code pour Google Sheets, dites-le moi !
