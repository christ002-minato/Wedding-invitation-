import { useEffect, useRef, useState } from "react";
import { Flower2, Heart, Palette } from "lucide-react";
import { RoseBranch } from "./FloralDecorations";

export function ColorsSection() {
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

  const weddingColors = [
    {
      color: "#6B1D2E",
      name: "Bordeaux Profond",
      description: "Passion & Élégance",
      border: false,
    },
    {
      color: "#5F7161",
      name: "Eucalyptus",
      description: "Nature & Fraîcheur",
      border: false,
    },
    {
      color: "#C9A84C",
      name: "Or Élégant",
      description: "Luxe & Raffinement",
      border: false,
    },
  ];

  return (
    <section
      id="colors"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-[var(--rose-cream)] to-white relative overflow-hidden"
    >
      {/* Decorative rose branches */}
      <div className="absolute bottom-0 left-0 opacity-15 pointer-events-none" style={{ transform: 'scale(0.5)' }}>
        <RoseBranch side="left" />
      </div>
      <div className="absolute top-0 right-0 opacity-15 pointer-events-none" style={{ transform: 'scale(0.5)' }}>
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
            <Palette className="w-6 h-6 text-red-700" />
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-red-900"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Couleurs du Mariage
            </h2>
            <Palette className="w-6 h-6 text-red-700" />
          </div>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Une palette élégante et raffinée pour célébrer notre union
          </p>
        </div>

        {/* Colors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {weddingColors.map((item, index) => (
            <div
              key={index}
              className={`text-center ${
                isVisible ? `opacity-100 animate-slideInUp delay-${(index + 2) * 100}` : "opacity-0"
              }`}
              style={{
                animation: isVisible 
                  ? `fadeSlideUp 0.6s ease ${index * 0.15}s both` 
                  : 'none'
              }}
            >
              {/* Color Circle */}
              <div className="mb-4 flex justify-center">
                <div
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-xl transition-all duration-400 hover:scale-110 hover:-translate-y-2 cursor-pointer"
                  style={{
                    background: item.color,
                    border: item.border ? `4px solid ${item.border}` : '4px solid white',
                  }}
                />
              </div>
              
              {/* Color Name */}
              <h3 
                className="text-lg md:text-xl font-semibold text-red-900 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-neutral-600 flex items-center justify-center gap-1">
                <Heart className="w-3 h-3 text-red-600 fill-red-600" />
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative message */}
        <div
          className={`text-center bg-white rounded-xl p-8 shadow-lg ${
            isVisible ? "opacity-100 animate-fadeIn delay-600" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
              <h3 
                className="text-2xl md:text-3xl text-red-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dress Code
              </h3>
              <Flower2 className="w-6 h-6 text-red-700 fill-red-700" />
            </div>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              Tenue élégante et raffinée de rigueur
            </p>
            <p className="text-sm md:text-base text-neutral-600 mt-2">
              Nous vous invitons à porter ces couleurs pour harmoniser notre célébration
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
              <p className="text-sm text-red-900 font-semibold">
                Votre élégance embellira notre journée
              </p>
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
