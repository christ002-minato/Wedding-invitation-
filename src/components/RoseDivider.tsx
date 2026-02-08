import { Heart } from "lucide-react";
import roseDividerImage from "figma:asset/9e0eadd58e9dbf98ccff1ff02197a2b2b2e7b21c.png";

interface RoseDividerProps {
  variant?: "default" | "overlay" | "full";
}

export function RoseDivider({ variant = "default" }: RoseDividerProps) {
  if (variant === "full") {
    return (
      <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden flex items-center justify-center bg-white">
        <img
          src={roseDividerImage}
          alt="Rose décorative"
          className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4 opacity-30">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-700 fill-red-700" />
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-700 fill-red-700" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className="relative w-full py-12 md:py-16 overflow-hidden bg-gradient-to-b from-white via-[var(--rose-cream)] to-white">
        <div className="relative z-10 flex items-center justify-center gap-6 max-w-6xl mx-auto px-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-700 to-red-700/50" />
          <div className="flex items-center gap-4">
            <img
              src={roseDividerImage}
              alt="Rose décorative"
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain"
            />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-red-700 to-red-700/50" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden flex items-center justify-center bg-white">
      <img
        src={roseDividerImage}
        alt="Rose décorative"
        className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] object-contain"
      />
    </div>
  );
}