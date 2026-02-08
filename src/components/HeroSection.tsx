import { HeroSlider } from "./HeroSlider";
import { Heart } from "lucide-react";
import { FloatingPetalsUp } from "./FloralDecorations";

interface HeroSectionProps {
  onRSVPClick: () => void;
}

export function HeroSection({ onRSVPClick }: HeroSectionProps) {
  const heroImages = [
    "https://images.unsplash.com/photo-1768899819100-5764d9ed1711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY291cGxlJTIwd2VkZGluZyUyMHJlZCUyMHJvc2VzfGVufDF8fHx8MTc2OTc5MDAzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1768462127062-6570d1c695e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwcm9tYW50aWMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk3MDM3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1643047757508-f747bbe05acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBjaHVyY2h8ZW58MXx8fHwxNzY5NzkwMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Floating petals */}
      <FloatingPetalsUp count={12} />
      
      {/* Background Slider */}
      <HeroSlider images={heroImages} />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto opacity-0 animate-fadeIn">
          {/* Rose ornament */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-700 rounded-full opacity-80" />
              <div className="w-3 h-3 bg-rose-400 rotate-45 opacity-80" />
            </div>
            <div className="w-16 h-[2px] bg-gradient-to-r from-red-700 to-white/40" />
            <Heart className="w-6 h-6 text-red-600 fill-red-600" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-red-700 to-white/40" />
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-rose-400 rotate-45 opacity-80" />
              <div className="w-3 h-3 bg-red-700 rounded-full opacity-80" />
            </div>
          </div>

          {/* Names */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Augustin & Chantal
          </h1>

          {/* Date */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-3 tracking-widest font-light">
            14 • FÉVRIER • 2026
          </p>

          {/* Biblical verse */}
          <p className="text-base md:text-lg mb-4 tracking-wide font-light max-w-2xl mx-auto leading-relaxed italic opacity-90">
            "Ce que Dieu a uni, que l'homme ne le sépare pas"
          </p>
          
          <p className="text-sm mb-12 opacity-75">
            Matthieu 19:6
          </p>

          {/* RSVP Button */}
          <button
            onClick={onRSVPClick}
            className="relative bg-red-800 hover:bg-red-900 text-white px-10 py-4 rounded-md tracking-widest uppercase transition-all transform hover:scale-105 shadow-lg"
            style={{ fontSize: "0.875rem", fontWeight: 600 }}
          >
            Confirmer ma présence
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn delay-500">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}