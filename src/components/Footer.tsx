import { Heart, Globe, Code, Palette, MessageCircle } from "lucide-react";
import shubLogo from "figma:asset/15320d6e2ab8954503febfc3e48ea06e3e74a94d.png";

export function Footer() {
  const openWhatsApp = () => {
    window.open("https://wa.me/+22544808513", "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-rose-500 to-red-700" />
      
      {/* Decorative background pattern */}
      <div className="absolute top-10 right-10 opacity-5">
        <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="20" className="text-red-500"/>
          <circle cx="40" cy="45" r="12" className="text-rose-400"/>
          <circle cx="60" cy="45" r="12" className="text-rose-400"/>
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="20" className="text-red-500"/>
          <circle cx="40" cy="45" r="12" className="text-rose-400"/>
          <circle cx="60" cy="45" r="12" className="text-rose-400"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Thank you message */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
              <h4
                className="text-3xl text-rose-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Merci de faire partie de notre journée
              </h4>
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Que Dieu vous bénisse ! Nous sommes impatients de partager ce moment sacré avec vous.
              Votre présence rendra cette journée encore plus spéciale.
            </p>
          </div>

          {/* Hashtag */}
          <div className="inline-block bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8">
            <p className="text-sm text-rose-300 tracking-wide">
              #AugustinEtChantal2026
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="text-center mb-8">
            <p className="text-xs text-neutral-400 mb-6">
              Site créé avec amour par
            </p>
          </div>

          {/* S-HUB Section */}
          <div className="max-w-4xl mx-auto">
            {/* Logo and Name */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-lg flex items-center justify-center p-2">
                <img 
                  src={shubLogo} 
                  alt="S-HUB Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                  S-HUB
                </h3>
                <p className="text-sm text-emerald-400 tracking-widest uppercase">
                  Digital Agency
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-neutral-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Agence digitale spécialisée dans la communication numérique, 
              la création de sites web professionnels et les cartes d'invitation web élégantes.
            </p>

            {/* Services Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Communication */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">Communication</h4>
                  <p className="text-xs text-neutral-400">
                    Stratégies digitales & design
                  </p>
                </div>
              </div>

              {/* Sites Web */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">Sites Web</h4>
                  <p className="text-xs text-neutral-400">
                    Développement professionnel
                  </p>
                </div>
              </div>

              {/* Invitations Web */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mb-3 shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">Invitations Web</h4>
                  <p className="text-xs text-neutral-400">
                    Cartes d'invitation élégantes
                  </p>
                </div>
              </div>
            </div>

            {/* Contact WhatsApp */}
            <div className="flex justify-center">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Contactez-nous sur WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs text-neutral-500">
              © 2026 S-HUB Digital Agency. Tous droits réservés.
            </p>
            <p className="text-xs text-neutral-600">
              Site créé pour Augustin & Chantal avec 💚 par S-HUB
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
