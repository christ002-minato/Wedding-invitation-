import { useState, useEffect, useRef } from "react";
// Import de l'audio via Vite pour obtenir l'URL correcte lors du bundling
import bgm from "../assets/audio.mpeg";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà visité le site
    const hasVisited = sessionStorage.getItem("hasVisitedWithMusic");
    
    if (!hasVisited && audioRef.current) {
      
      audioRef.current.muted = true;
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsMuted(true);
            sessionStorage.setItem("hasVisitedWithMusic", "true");
          })
          .catch((error) => {
            console.log("Autoplay was prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  // Forcer la lecture au premier clic/pointerdown de l'utilisateur
  useEffect(() => {
    function handleFirstInteraction() {
      if (audioRef.current && !isPlaying) {
        try {
          audioRef.current.muted = false;
          const p = audioRef.current.play();
          if (p !== undefined) {
            p.then(() => {
              setIsPlaying(true);
              setIsMuted(false);
              sessionStorage.setItem("hasVisitedWithMusic", "true");
            }).catch((err) => {
              console.log("Play after interaction failed:", err);
            });
          }
        } catch (e) {
          console.log("Error forcing play:", e);
        }
      }
    }

    window.addEventListener("pointerdown", handleFirstInteraction, { once: true });
    return () => window.removeEventListener("pointerdown", handleFirstInteraction as EventListener);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Si la lecture était muette (autoplay muet), réactiver le son lors du clic utilisateur
        if (audioRef.current.muted) {
          audioRef.current.muted = false;
          setIsMuted(false);
        }
        audioRef.current.play();
        setIsPlaying(true);
        sessionStorage.setItem("hasVisitedWithMusic", "true");
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={bgm}
        loop
        preload="auto"
        playsInline
        className="hidden"
      >
        Votre navigateur ne supporte pas l'élément audio.
      </audio>

      {/* Music Control Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2"
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-14 h-14 bg-gradient-to-br from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110 group"
          aria-label={isPlaying ? "Pause la musique" : "Jouer la musique"}
        >
          {isPlaying ? (
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-white animate-pulse" />
              <div className="w-1 h-4 bg-white animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-1 h-4 bg-white animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
          ) : (
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-neutral-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {isPlaying ? "Pause" : "Musique romantique"}
          </span>
        </button>

        {/* Mute Button */}
        {isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleMute}
            className="w-12 h-12 bg-white/90 hover:bg-white text-red-800 rounded-full shadow-md flex items-center justify-center transition-all transform hover:scale-110"
            aria-label={isMuted ? "Activer le son" : "Couper le son"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>
        )}

        {/* Decorative hearts */}
        {isPlaying && (
          <>
            <motion.div
              className="absolute -top-2 -left-2 w-3 h-3"
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ❤️
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3"
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
            >
              🌹
            </motion.div>
          </>
        )}
      </motion.div>
    </>
  );
}
