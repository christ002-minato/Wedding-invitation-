import { useEffect, useRef, useState } from "react";
import { Check, Send, UserCheck, Heart, Flower2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function RSVPSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    attendance: "present",
    guests: "1",
    message: "",
    whatsapp: "",
    affinity: "",
    affinityOther: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validation front-end
  if (!formData.affinity) {
    toast.error("Veuillez sélectionner votre affinité avec les mariés");
    return;
  }
  if (formData.affinity === "autre" && !formData.affinityOther.trim()) {
    toast.error("Veuillez préciser votre affinité");
    return;
  }

  try {
    const affinityLabels: Record<string, string> = {
      parents_mariee: "Parents de la mariée",
      parents_marie: "Parents du marié",
      supérieur_hiérachique: "Supérieur hiérarchique",
      representants_associations: "Représentants d'associations",
      frère_communauté_mariée: "Frère de communauté de la mariée",
      frère_communauté_marié: "Frère de communauté du marié",
      amis_mariee: "Amis de la mariée",
      amis_marie: "Amis du marié",
      collogue_marie: "Collègue du marié",
      collegue_mariee: "Collègue de la mariée",
      autre: "Autre",
      "": "",
    };
    
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbybiZ68lpayWveXnO4l9WG9HVEz5iW3agLHhD8qyYwalvgzRFwtritqXTaNBEQB4yHB/exec";

    if (GOOGLE_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
      toast.error("ℹ️ URL Google Apps Script non configurée", {
        description: "Remplacez YOUR_SCRIPT_ID_HERE par votre propre Script ID. Voir le fichier GOOGLE_SHEETS_GUIDE.md",
      });
      return;
    }

    const payload = {
      ...formData,
      affinity_code: formData.affinity,
      affinity: affinityLabels[formData.affinity] || formData.affinity,
      affinity_detail: formData.affinity === "autre" ? formData.affinityOther : "",
    };

    console.log("📤 Envoi des données RSVP :", payload);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Important pour éviter les erreurs CORS avec Google Apps Script
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("✅ Réponse reçue du serveur (no-cors mode)");
    
    setIsSubmitted(true);
    toast.success("Confirmation envoyée avec succès ! 💕", {
      description: "Nous avons bien reçu votre réponse. Merci beaucoup !",
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
        affinity: "",
        affinityOther: "",
      });
    }, 3000);
    
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi :", error);
    toast.error("Erreur lors de l'envoi", {
      description: "Veuillez réessayer plus tard. Consultez la console pour plus de détails.",
    });
  }
};

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-[var(--rose-cream)]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "opacity-100 animate-slideInUp" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-red-900"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Confirmez Votre Présence
            </h2>
            <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            Merci de nous confirmer votre présence avant le 14 février 2026
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
          </p>
        </div>

        {/* RSVP Form */}
        <div
          className={`bg-white rounded-lg p-8 md:p-12 shadow-2xl overflow-hidden relative ${
            isVisible ? "opacity-100 animate-slideInUp delay-200" : "opacity-0"
          }`}
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-rose-500 to-red-700" />
          
          <div className="relative z-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-wide text-neutral-800 mb-2 flex items-center gap-2"
                  >
                    <Heart className="w-3 h-3 text-red-600 fill-red-600" />
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 bg-[var(--input-background)] focus:border-red-700 focus:outline-none transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Affinité */}
                <div>
                  <label
                    htmlFor="affinity"
                    className="block text-sm uppercase tracking-wide text-neutral-800 mb-2 flex items-center gap-2"
                  >
                    <Heart className="w-3 h-3 text-red-600 fill-red-600" />
                    Affinité avec les mariés
                  </label>
                  <select
                    id="affinity"
                    name="affinity"
                    value={formData.affinity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 bg-[var(--input-background)] focus:border-red-700 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="parents_mariee">Parents de la mariée</option>
                    <option value="parents_marie">Parents du marié</option>
                    <option value="supérieur_hiérachique">Supérieur hiérarchique</option>
                    <option value="representants_associations">Représentants d'associations</option>
                    <option value="frère_communauté_mariée">Frère de communauté de la mariée</option>
                    <option value="frère_communauté_marié">Frère de communauté du marié</option>
                    <option value="amis_mariee">Amis de la mariée</option>
                    <option value="amis_marie">Amis du marié</option>
                    <option value="collegue_marie">Collègue du marié</option>
                    <option value="collegue_mariee">Collègue de la mariée</option>
                    <option value="autre">Autre</option>
                  </select>

                  {formData.affinity === "autre" && (
                    <div className="mt-3">
                      <label
                        htmlFor="affinityOther"
                        className="block text-sm uppercase tracking-wide text-neutral-800 mb-2"
                      >
                        Précisez
                      </label>
                      <input
                        type="text"
                        id="affinityOther"
                        name="affinityOther"
                        value={formData.affinityOther}
                        onChange={handleChange}
                        required={formData.affinity === "autre"}
                        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 bg-[var(--input-background)] focus:border-red-700 focus:outline-none transition-colors"
                        placeholder="Précisez votre affinité"
                      />
                    </div>
                  )}
                </div>

                {/* Attendance */}
                <div>
                  <label
                    className="block text-sm uppercase tracking-wide text-neutral-800 mb-2 flex items-center gap-2"
                  >
                    <Heart className="w-3 h-3 text-red-600 fill-red-600" />
                    Présence *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, attendance: "present" }))
                      }
                      className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                        formData.attendance === "present"
                          ? "border-red-700 bg-red-700 text-white"
                          : "border-neutral-200 bg-white text-neutral-800 hover:border-red-700"
                      }`}
                    >
                      <Flower2 className={`w-4 h-4 ${formData.attendance === "present" ? "fill-white" : ""}`} />
                      Je serai présent(e)
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, attendance: "absent" }))
                      }
                      className={`py-3 px-4 rounded-lg border-2 transition-all ${
                        formData.attendance === "absent"
                          ? "border-neutral-600 bg-neutral-600 text-white"
                          : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-600"
                      }`}
                    >
                      Je serai absent(e)
                    </button>
                  </div>
                </div>

                {/* Number of Guests */}
                {formData.attendance === "present" && (
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm uppercase tracking-wide text-neutral-800 mb-2 flex items-center gap-2"
                    >
                      <Heart className="w-3 h-3 text-red-600 fill-red-600" />
                      Nombre de Personnes avec lesquelles  vous venez *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 bg-[var(--input-background)] focus:border-red-700 focus:outline-none transition-colors"
                    >
                      <option value="1">Moi seule</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes ou plus</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-wide text-neutral-800 mb-2 flex items-center gap-2"
                  >
                    <Heart className="w-3 h-3 text-red-600 fill-red-600" />
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 bg-[var(--input-background)] focus:border-red-700 focus:outline-none transition-colors resize-none"
                    placeholder="Partagez vos souhaits ou informations complémentaires..."
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm uppercase tracking-wide text-neutral-800 mb-2 flex items-center gap-2"
                  >
                    <Heart className="w-3 h-3 text-red-600 fill-red-600" />
                    Numéro WhatsApp (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 bg-[var(--input-background)] focus:border-red-700 focus:outline-none transition-colors"
                    placeholder="+225 07 12 34 56 78"
                  />
                  <p className="text-xs text-neutral-500 mt-2">
                    Pour recevoir une confirmation par WhatsApp
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg uppercase tracking-widest"
                >
                  
                  <span>Envoyer </span>
                
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-red-700/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-red-700">
                  <Check className="w-10 h-10 text-red-700" />
                </div>
                <h3
                  className="text-3xl mb-4 text-red-900 flex items-center justify-center gap-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                 
                </h3>
                <p className="text-lg text-neutral-600">
                  Nous avons bien reçu votre réponse et avons hâte de célébrer
                  avec vous.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}