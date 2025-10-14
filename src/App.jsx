import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import LoveStorySection from "./components/LoveStorySection";
import MusicPlayer from "./components/MusicPlayer";
import InteractiveButtons from "./components/InteractiveButtons";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="desktop-view">
        <div className="desktop-content">
          {/* Music Player */}
          <MusicPlayer />

          {/* Main Content */}
          <main>
            <HeroSection />
            <LoveStorySection />
          </main>

          {/* Interactive Buttons */}
          <InteractiveButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
