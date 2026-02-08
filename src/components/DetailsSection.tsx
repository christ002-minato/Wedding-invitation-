import { Calendar, Clock, MapPin, Navigation, Heart, Flower2, Church, Users, Utensils } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { RoseBranch } from "./FloralDecorations";

export function DetailsSection() {
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

  const openMap = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="details"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-[var(--rose-cream)] relative overflow-hidden"
    >
      {/* Decorative rose branches */}
      <div className="absolute top-0 left-0 opacity-20 pointer-events-none" style={{ transform: 'scale(0.5)' }}>
        <RoseBranch side="left" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none" style={{ transform: 'scale(0.5)' }}>
        <RoseBranch side="right" />
      </div>

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
              Programme 
            </h2>
            <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
          </div>
          <p className="text-lg md:text-xl text-neutral-600 mt-4">
            Samedi 14 Février 2026
          </p>
        </div>

        {/* Programme de la journée */}
        <div
          className={`mb-16 ${
            isVisible ? "opacity-100 animate-slideInUp delay-200" : "opacity-0"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Mariage Civil */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-red-700 to-red-900 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                
                {/* Time */}
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                  <span className="text-2xl text-red-800 font-bold">13:30</span>
                  <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-red-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Mariage Civil
                </h3>
                
                {/* Location */}
                <div className="flex items-start gap-2 text-neutral-700 mb-4">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-base leading-relaxed">
                    Nouvelle Mairie de Songon,<br />Côte d'Ivoire
                  </p>
                </div>
                
                {/* Map Button */}
                <button
                  onClick={() => openMap("https://www.google.com/maps/search/Mairie+de+Songon+Côte+d'Ivoire")}
                  className="flex items-center gap-2 text-red-700 hover:text-red-900 transition-colors bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full mt-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm uppercase tracking-wide font-semibold">
                    Voir sur la carte
                  </span>
                </button>
              </div>
            </div>

            {/* 2. Bénédiction Nuptiale */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Church className="w-10 h-10 text-white" />
                </div>
                
                {/* Time */}
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                  <span className="text-2xl text-red-800 font-bold">16:00</span>
                  <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-red-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bénédiction Nuptiale
                </h3>
                
                {/* Location */}
                <div className="flex items-start gap-2 text-neutral-700 mb-4">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-base leading-relaxed">
                    Communauté Betharram<br />
                    (En face de la paroisse Saint Bernard d'Adiopodoumé),<br />
                    Abidjan
                  </p>
                </div>
                
                {/* Map Button */}
                <button
                  onClick={() => openMap("https://www.google.com/maps/search/Communauté+Betharram+Adiopodoumé+Abidjan")}
                  className="flex items-center gap-2 text-red-700 hover:text-red-900 transition-colors bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full mt-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm uppercase tracking-wide font-semibold">
                    Voir sur la carte
                  </span>
                </button>
              </div>
            </div>

            {/* 3. Cocktail Dînatoire */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                
                {/* Time */}
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                  <span className="text-2xl text-red-800 font-bold">Après la cérémonie</span>
                  <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-semibold text-red-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Cocktail Dînatoire
                </h3>
                
                {/* Location */}
                <div className="flex items-start gap-2 text-neutral-700 mb-4">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-base leading-relaxed">
                    Collège Anador,<br />
                    Yopougon
                  </p>
                </div>
                
                {/* Map Button */}
                <button
                  onClick={() => openMap("https://www.google.com/maps/search/Collège+Anador+Yopougon+Abidjan")}
                  className="flex items-center gap-2 text-red-700 hover:text-red-900 transition-colors bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full mt-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="text-sm uppercase tracking-wide font-semibold">
                    Voir sur la carte
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Message de bienvenue */}
        <div
          className={`text-center bg-white rounded-xl p-8 shadow-lg ${
            isVisible ? "opacity-100 animate-fadeIn delay-400" : "opacity-0"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
              <Heart className="w-6 h-6 text-red-700 fill-red-700" />
              <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
            </div>
            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed italic">
              "Ce que Dieu a uni, que l'homme ne le sépare pas"
            </p>
            <p className="text-sm md:text-base text-neutral-500 mt-2">
              Matthieu 19:6
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
              <p className="text-base md:text-lg text-red-900 font-semibold">
                Nous avons hâte de célébrer avec vous !
              </p>
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}