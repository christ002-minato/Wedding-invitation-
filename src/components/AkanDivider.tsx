interface AkanDividerProps {
  variant?: "default" | "thin" | "ornate";
}

export function AkanDivider({ variant = "default" }: AkanDividerProps) {
  if (variant === "thin") {
    return (
      <div className="flex items-center justify-center gap-4 my-8">
        <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent via-[var(--kente-gold)] to-[var(--kente-red)]" />
        <div className="flex items-center gap-2">
          {/* Geometric pattern with symbolic colors */}
          <div className="w-3 h-3 bg-[var(--kente-blue)] rounded-full" />
          <div className="w-4 h-4 bg-[var(--kente-gold)] rotate-45" />
          <div className="w-3 h-3 border-2 border-[var(--kente-red)]" />
          <div className="w-4 h-4 bg-[var(--kente-green)] rotate-45" />
          <div className="w-3 h-3 bg-[var(--kente-blue)] rounded-full" />
        </div>
        <div className="h-[3px] flex-1 bg-gradient-to-l from-transparent via-[var(--kente-red)] to-[var(--kente-green)]" />
      </div>
    );
  }

  if (variant === "ornate") {
    return (
      <div className="flex items-center justify-center gap-6 my-12">
        {/* Left geometric pattern */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <div className="w-4 h-4 bg-[var(--kente-red)]" />
            <div className="w-4 h-4 bg-[var(--kente-blue)] rounded-full" />
          </div>
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-[var(--kente-gold)]" />
          <div className="w-5 h-5 bg-[var(--kente-green)] rotate-45" />
        </div>

        {/* Center Kente-inspired symbol */}
        <div className="relative flex items-center justify-center">
          {/* Outer circle symbolizing completeness */}
          <div className="absolute w-16 h-16 border-3 border-[var(--kente-blue)] rounded-full opacity-40" />
          
          {/* Cross pattern */}
          <div className="absolute w-16 h-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-[var(--kente-gold)]" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-[var(--kente-gold)]" />
          </div>
          
          {/* Center diamond */}
          <div className="relative z-10 w-6 h-6 bg-gradient-to-br from-[var(--kente-red)] to-[var(--kente-gold)] rotate-45" />
          
          {/* Corner squares */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--kente-green)]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--kente-blue)] rounded-full" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[var(--kente-blue)] rounded-full" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--kente-green)]" />
        </div>

        {/* Right geometric pattern */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-[var(--kente-green)] rotate-45" />
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-[var(--kente-gold)]" />
          <div className="flex flex-col gap-1">
            <div className="w-4 h-4 bg-[var(--kente-blue)] rounded-full" />
            <div className="w-4 h-4 bg-[var(--kente-red)]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 my-10">
      <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[var(--kente-blue)] to-[var(--kente-gold)]" />
      <div className="flex items-center gap-2">
        {/* Kente geometric symbols with symbolic colors */}
        <div className="w-3 h-3 bg-[var(--kente-red)] rotate-45" />
        <div className="w-3 h-3 border-2 border-[var(--kente-gold)]" />
        <div className="w-3 h-3 bg-[var(--kente-green)] rounded-full" />
        <div className="w-4 h-4 bg-[var(--kente-blue)] rotate-45" />
        <div className="w-3 h-3 bg-[var(--kente-yellow)] rounded-full" />
        <div className="w-3 h-3 border-2 border-[var(--kente-gold)]" />
        <div className="w-3 h-3 bg-[var(--kente-red)] rotate-45" />
      </div>
      <div className="h-[2px] w-20 bg-gradient-to-l from-transparent via-[var(--kente-green)] to-[var(--kente-blue)]" />
    </div>
  );
}