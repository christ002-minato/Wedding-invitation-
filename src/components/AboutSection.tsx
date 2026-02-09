import { Heart, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import rose_bible_1 from "../assets/rose-bible-1.jpg";
import rose_bible_2 from "../assets/rose-bible-2.jpg";

export function AboutSection() {
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

  const galleryImages = [ 
    rose_bible_2,
    rose_bible_1,
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-[var(--rose-cream)] to-white"
    >
      <div className="max-w-6xl mx-auto">
       

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text - Biblical Verses */}
          <div
            className={`space-y-6 ${
              isVisible ? "opacity-100 animate-slideInLeft delay-200" : "opacity-0"
            }`}
          >
            {/* First Biblical Verse */}
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-700">
              <div className="flex items-start gap-3 mb-3">
                <Heart className="w-6 h-6 text-red-700 fill-red-700 flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed text-neutral-700 italic">
                  "Celui qui a trouvé une femme a trouvé le bonheur ; c'est une grâce qu'il a obtenue de l'Éternel."
                </p>
              </div>
              <p className="text-sm text-neutral-500 text-right">- Proverbes 18:22</p>
            </div>

           

            {/* Decorative message */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <Sparkles className="w-5 h-5 text-red-700" />
              <p className="text-base text-red-900 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Unis par l'amour de Dieu
              </p>
              <Sparkles className="w-5 h-5 text-red-700" />
            </div>
          </div>

          {/* Featured Image */}
          <div
            className={`relative ${
              isVisible ? "opacity-100 animate-slideInRight delay-300" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={galleryImages[0]}
                alt="Augustin et Chantal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative Rose Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-700/10 via-rose-400/10 to-red-900/10 rounded-lg -z-10" />
          </div>
        </div>

        
        
      </div>
    </section>
  );
}