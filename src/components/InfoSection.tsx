import { useEffect, useRef, useState } from "react";
import { Phone, Heart, Flower2 } from "lucide-react";

export function InfoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="info"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-[var(--rose-cream)] to-white"
    >
      <div className="max-w-6xl mx-auto relative z-10">
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
              Informations Pratiques
            </h2>
            <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
          </div>
        </div>

        {/* Besoin d'aide */}
        <div
          className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all ${
            isVisible ? "opacity-100 animate-fadeIn delay-200" : "opacity-0"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-red-700 fill-red-700" />
              <h3 className="text-2xl md:text-3xl text-red-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Besoin d'aide ?
              </h3>
              <Heart className="w-5 h-5 text-red-700 fill-red-700" />
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Pour toute question ou information complémentaire, n'hésitez pas à
              nous contacter.
            </p>
            
            {/* Numéros de téléphone */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mme KOUADIO */}
              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl px-6 py-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-neutral-600 mb-1">Mme KOUADIO</p>
                  <a 
                    href="tel:+2250748489401"
                    className="text-xl md:text-2xl text-red-900 font-semibold hover:text-red-700 transition-colors"
                  >
                    07 48 48 94 01
                  </a>
                </div>
              </div>

              {/* Mme N'GUESSAN */}
              <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl px-6 py-6 shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-neutral-600 mb-1">Mme N'GUESSAN Marina</p>
                  <a 
                    href="tel:+2250707182153"
                    className="text-xl md:text-2xl text-red-900 font-semibold hover:text-red-700 transition-colors"
                  >
                    07 07 18 21 53
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}