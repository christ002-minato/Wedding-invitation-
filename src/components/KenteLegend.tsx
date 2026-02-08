import { useState } from "react";
import { Info, X } from "lucide-react";

export function KenteLegend() {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    {
      name: "Blanc",
      color: "var(--akan-white)",
      meaning: "Pureté et spiritualité"
    },
    {
      name: "Jaune/Or",
      color: "var(--akan-gold)",
      meaning: "Richesse et royauté"
    },
    {
      name: "Noir",
      color: "var(--akan-black)",
      meaning: "Mystère et maturité"
    },
    {
      name: "Rouge",
      color: "var(--akan-red)",
      meaning: "Amour et passion"
    },
    {
      name: "Bleu",
      color: "var(--akan-blue)",
      meaning: "Paix et sagesse"
    },
    {
      name: "Vert",
      color: "var(--akan-green)",
      meaning: "Croissance et vie"
    }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[var(--akan-gold)] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Légende des couleurs Kente"
      >
        <Info className="w-6 h-6" />
      </button>

      {/* Legend Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--akan-cream)] rounded-lg shadow-2xl max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[var(--akan-black)] hover:text-[var(--akan-red)] transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <h3 className="text-2xl mb-2 text-[var(--akan-black)]">
              Signification des Couleurs
            </h3>
            <p className="text-sm text-[var(--akan-black)] opacity-75 mb-6">
              Pagne Kita / Kente d'Akan
            </p>

            {/* Color List */}
            <div className="space-y-4">
              {colors.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-md shadow-md border-2 border-[var(--akan-black)] border-opacity-20"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <p className="font-semibold text-[var(--akan-black)]">
                      {item.name}
                    </p>
                    <p className="text-sm text-[var(--akan-black)] opacity-75">
                      {item.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Geometric Patterns Info */}
            <div className="mt-6 pt-6 border-t-2 border-[var(--akan-gold)] border-opacity-30">
              <p className="text-sm text-[var(--akan-black)] opacity-75">
                Les motifs géométriques (carrés, triangles, cercles) représentent
                l'harmonie, la protection et l'unité dans la culture Akan.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
