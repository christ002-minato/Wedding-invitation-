export function KenteBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main Kente Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        {/* Vertical strips with alternating colors */}
        <div className="flex h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col">
              {/* Pattern blocks */}
              <div className="h-1/6 bg-[var(--kente-red)]" />
              <div className="h-1/6 bg-[var(--kente-gold)]" />
              <div className="h-1/6 bg-[var(--kente-green)]" />
              <div className="h-1/6 bg-[var(--kente-blue)]" />
              <div className="h-1/6 bg-[var(--kente-gold)]" />
              <div className="h-1/6 bg-[var(--kente-black)]" />
            </div>
          ))}
        </div>
        
        {/* Horizontal overlay strips */}
        <div className="absolute inset-0 flex flex-col">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className={`h-[6.66%] ${i % 2 === 0 ? 'opacity-50' : 'opacity-0'}`}>
              <div className="h-full flex">
                <div className="w-1/5 bg-[var(--kente-gold)]" />
                <div className="w-1/5 bg-[var(--kente-red)]" />
                <div className="w-1/5 bg-[var(--kente-green)]" />
                <div className="w-1/5 bg-[var(--kente-blue)]" />
                <div className="w-1/5 bg-[var(--kente-white)]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geometric decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        {/* Triangles scattered */}
        <div className="absolute top-20 left-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-[var(--kente-gold)]" />
        <div className="absolute top-40 right-20 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[40px] border-b-[var(--kente-red)]" />
        <div className="absolute bottom-32 left-1/4 w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[55px] border-b-[var(--kente-green)]" />
        <div className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[var(--kente-blue)]" />
        
        {/* Circles scattered */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full border-4 border-[var(--kente-gold)]" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full border-4 border-[var(--kente-red)]" />
        <div className="absolute top-2/3 left-1/2 w-12 h-12 rounded-full bg-[var(--kente-green)]" />
        <div className="absolute top-1/2 right-1/2 w-14 h-14 rounded-full border-4 border-[var(--kente-blue)]" />
        
        {/* Squares/Diamonds rotated */}
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-[var(--kente-gold)] rotate-45" />
        <div className="absolute bottom-20 right-40 w-16 h-16 border-4 border-[var(--kente-red)] rotate-45" />
        <div className="absolute top-3/4 left-2/3 w-10 h-10 bg-[var(--kente-green)] rotate-45" />
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 border-4 border-[var(--kente-blue)] rotate-45" />
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--kente-white)]/5 via-transparent to-[var(--kente-gold)]/5" />
    </div>
  );
}
