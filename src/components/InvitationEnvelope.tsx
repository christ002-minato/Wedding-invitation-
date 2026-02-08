import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ArrowRight } from "lucide-react";
import { FloatingPetals, RoseBranch, FloralCorner, GoldenKnot } from "./FloralDecorations";

interface InvitationEnvelopeProps {
  onComplete: () => void;
}

export function InvitationEnvelope({ onComplete }: InvitationEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà vu l'animation
    const hasSeenInvitation = localStorage.getItem("hasSeenInvitation");
    if (hasSeenInvitation === "true") {
      setIsVisible(false);
      onComplete();
    }
  }, [onComplete]);

  const handleOpen = () => {
    setIsOpen(true);
    // Afficher le bouton "Entrer" après l'animation d'ouverture
    setTimeout(() => {
      setShowButton(true);
    }, 2800);
  };

  const handleEnter = () => {
    localStorage.setItem("hasSeenInvitation", "true");
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{
          background: 'linear-gradient(135deg, #F5E6EC 0%, #E8D0DA 50%, #F5E6EC 100%)',
        }}
      >
        {/* Floating petals */}
        <FloatingPetals count={18} />

        {/* Background decorative branches */}
        <div className="absolute top-0 left-0 opacity-60" style={{ transform: 'scale(0.7)' }}>
          <RoseBranch side="left" />
        </div>
        <div className="absolute top-0 right-0 opacity-60" style={{ transform: 'scale(0.7)' }}>
          <RoseBranch side="right" />
        </div>

        {/* Background content */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Biblical quote in background - subtle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center px-6 max-w-3xl"
          >
            <p className="text-neutral-600 text-base md:text-xl font-serif italic">
              "L'amour est patient, l'amour est serviable"
            </p>
            <p className="text-neutral-500 text-xs md:text-sm mt-1">
              1 Corinthiens 13:4
            </p>
          </motion.div>

          {/* Invitation text in background */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center px-6"
          >
            <p className="text-neutral-700 text-sm md:text-base font-serif">
              Vous êtes invités à célébrer l'union sacrée de
            </p>
            <p className="text-red-800 text-xl md:text-3xl mt-2 font-serif">
              Augustin & Chantal
            </p>
            <p className="text-neutral-600 text-sm md:text-base mt-1">
              Samedi 14 Février 2026
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-sm md:max-w-md" style={{ height: '340px' }}>
          {/* Envelope Container */}
          <div 
            className="relative w-full h-full"
            style={{
              perspective: '1500px',
            }}
          >
            {/* Envelope Body - Kraft Paper Style */}
            <div 
              className="absolute inset-0 rounded-sm shadow-2xl"
              style={{
                background: 'linear-gradient(145deg, #fff8f9, #E8D0DA)',
              }}
            >
              {/* Paper texture */}
              <div className="absolute inset-0 opacity-20 rounded-sm">
                <div className="w-full h-full" style={{ 
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px),
                    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)
                  `
                }} />
              </div>
              
              {/* Heart decoration when closed */}
              <div 
                className="absolute inset-0 flex items-end justify-center pb-8" 
                style={{
                  opacity: isOpen ? 0 : 1,
                  transition: 'opacity 0.5s'
                }}
              >
                <div className="flex flex-col items-center gap-1">
                  <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
                  <Heart className="w-6 h-6" style={{ color: '#6B1D2E' }} />
                  <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
                </div>
              </div>
            </div>

            {/* Letter inside (visible when opening) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ y: 0, opacity: 0, scale: 0.95 }}
                  animate={{ y: -90, opacity: 1, scale: 1 }}
                  transition={{ duration: 2.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute left-1/3 bg-white rounded-lg shadow-2xl p-6 md:p-8 flex flex-col items-center justify-center z-30"
                  style={{
                    width: '280px',
                    top: '90px',
                    transform: 'translateX(-50%)',
                    border: '1px solid #E8D5A3',
                    background: 'linear-gradient(180deg, #fffbfc, #fff)',
                  }}
                >
                  {/* Floral corners */}
                  <FloralCorner position="tl" />
                  <FloralCorner position="tr" />
                  <FloralCorner position="bl" />
                  <FloralCorner position="br" />
                  
                  <div className="relative z-10 text-center">
                    {/* Top gold line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                      style={{ 
                        width: '50px', 
                        height: '1px', 
                        background: '#C9A84C', 
                        margin: '0 auto 16px' 
                      }}
                    />

                    {/* Biblical quote */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="text-xs italic mb-4 text-neutral-600"
                    >
                      « J'ai trouvé celui que mon âme aime »
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      className="text-xs mb-4 text-neutral-500"
                    >
                      Cantique 3:4
                    </motion.p>

                    {/* Names */}
                    <motion.h1
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2, type: "spring" }}
                      className="text-3xl md:text-4xl text-red-900 mb-2 font-serif"
                    >
                      Augustin & Chantal
                    </motion.h1>

                    {/* Golden knot */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 2.2, type: "spring", stiffness: 200 }}
                      className="flex justify-center my-3"
                    >
                      <div style={{ transform: 'scale(0.6)' }}>
                        <GoldenKnot />
                      </div>
                    </motion.div>

                    {/* Bottom gold line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 2.4, duration: 0.8 }}
                      style={{ 
                        width: '50px', 
                        height: '1px', 
                        background: '#C9A84C', 
                        margin: '16px auto 0' 
                      }}
                    />

                    {/* Loading dots */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.6 }}
                      className="flex justify-center gap-1.5 mt-4"
                    >
                      {[0, 1, 2].map(i => (
                        <motion.div 
                          key={i} 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ background: '#6B1D2E' }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.25,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Envelope Flap */}
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top z-40 rounded-t-sm"
              animate={
                isOpen
                  ? {
                      rotateX: -180,
                      z: 50,
                    }
                  : {
                      rotateX: 0,
                      z: 0,
                    }
              }
              transition={{ duration: 2.8, ease: [0.4, 0, 0.2, 1] }}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "top center",
                height: '140px',
              }}
            >
              {/* Triangle flap */}
              <svg
                viewBox="0 0 400 200"
                className="w-full"
                style={{ 
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                }}
              >
                <defs>
                  <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#fff5f6", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#E8D0DA", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 0 L 200 200 L 400 0 Z"
                  fill="url(#flapGradient)"
                  stroke="rgba(0,0,0,0.05)"
                  strokeWidth="1"
                />
                {/* Fold lines */}
                <line x1="0" y1="0" x2="200" y2="200" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                <line x1="400" y1="0" x2="200" y2="200" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
              </svg>

              {/* Wax seal style button */}
              {!isOpen && (
                <motion.button
                  onClick={handleOpen}
                  className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Ouvrir l'invitation"
                >
                  <div className="relative">
                    {/* Wax seal appearance */}
                    <div 
                      className="w-20 md:w-24 h-20 md:h-24 rounded-full shadow-xl flex items-center justify-center border-2 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #6B1D2E, #8B3A4F)',
                        borderColor: '#5A1525',
                      }}
                    >
                      <Heart className="w-10 md:w-12 h-10 md:h-12 text-red-100 fill-current" />
                    </div>
                    {/* Subtle pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-red-600 opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.button>
              )}
            </motion.div>

            {/* Instruction text */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute inset-0 flex flex-col items-center justify-end z-20 pointer-events-none pb-3 md:pb-4"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <p className="text-red-900 text-xs md:text-sm font-serif px-4">
                    Cliquez sur le sceau pour ouvrir
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Enter Button - appears after opening */}
          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 z-50"
              >
                <motion.button
                  onClick={handleEnter}
                  className="px-8 py-4 text-white rounded-full shadow-2xl flex items-center gap-3 transition-all group border-none cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #6B1D2E, #8B3A4F)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg font-serif tracking-wide">Entrer sur le site</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating elements - subtle */}
          {!isOpen && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-red-800 opacity-20"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${15 + (i % 2) * 60}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                />
              ))}
            </>
          )}
        </div>

        {/* Bottom decorative branches */}
        <div className="absolute bottom-12 left-0 opacity-50" style={{ transform: 'scale(0.5) rotate(15deg)', transformOrigin: 'bottom left' }}>
          <RoseBranch side="left" />
        </div>
        <div className="absolute bottom-12 right-0 opacity-50" style={{ transform: 'scale(0.5) rotate(-15deg)', transformOrigin: 'bottom right' }}>
          <RoseBranch side="right" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
