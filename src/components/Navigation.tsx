import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Names */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-semibold tracking-wide text-red-900 hover:text-red-700 transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Augustin & Chantal
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase"
            >
              Notre Histoire
            </button>
            <button
              onClick={() => scrollToSection("colors")}
              className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase"
            >
              Couleurs
            </button>
            <button
              onClick={() => scrollToSection("details")}
              className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase"
            >
              Programme
            </button>
            <button
              onClick={() => scrollToSection("rsvp")}
              className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase"
            >
              RSVP
            </button>
            <button
              onClick={() => scrollToSection("info")}
              className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase"
            >
              Infos Pratiques
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-red-900" />
            ) : (
              <Menu className="w-6 h-6 text-red-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-red-100">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase text-left"
              >
                Notre Histoire
              </button>
              <button
                onClick={() => scrollToSection("colors")}
                className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase text-left"
              >
                Couleurs
              </button>
              <button
                onClick={() => scrollToSection("details")}
                className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase text-left"
              >
                Programme
              </button>
              <button
                onClick={() => scrollToSection("rsvp")}
                className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase text-left"
              >
                RSVP
              </button>
              <button
                onClick={() => scrollToSection("info")}
                className="text-sm tracking-wide text-neutral-600 hover:text-red-700 transition-colors uppercase text-left"
              >
                Infos Pratiques
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}