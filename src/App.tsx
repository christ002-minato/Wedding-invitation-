import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ColorsSection } from "./components/ColorsSection";
import { DetailsSection } from "./components/DetailsSection";
import { RSVPSection } from "./components/RSVPSection";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { RoseDivider } from "./components/RoseDivider";
import { InvitationEnvelope } from "./components/InvitationEnvelope";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { useState, useEffect } from "react";

export default function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà vu l'enveloppe
    const hasSeenInvitation = localStorage.getItem("hasSeenInvitation");
    if (hasSeenInvitation === "true") {
      setShowMainContent(true);
    }
  }, []);

  const scrollToRSVP = () => {
    const element = document.getElementById("rsvp");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Si on n'a pas encore vu l'enveloppe, afficher uniquement celle-ci
  if (!showMainContent) {
    return <InvitationEnvelope onComplete={() => setShowMainContent(true)} />;
  }

  // Sinon, afficher le contenu principal
  return (
    <div className="min-h-screen bg-[var(--rose-cream)] relative">
      {/* Background Music */}
      <BackgroundMusic />
      
      {/* Content with z-index to appear above background */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection onRSVPClick={scrollToRSVP} />

        {/* Rose Divider */}
        <RoseDivider variant="full" />

        {/* About Section */}
        <AboutSection />

        {/* Rose Divider */}
        <RoseDivider variant="overlay" />

        {/* Colors Section - NEW */}
        <ColorsSection />

        {/* Rose Divider */}
        <RoseDivider variant="full" />

        {/* Details Section */}
        <DetailsSection />

        {/* Rose Divider */}
        <RoseDivider variant="overlay" />

        {/* RSVP Section */}
        <RSVPSection />

        {/* Rose Divider */}
        <RoseDivider variant="full" />

        {/* Info Section */}
        <InfoSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
}