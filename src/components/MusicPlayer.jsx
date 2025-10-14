import { useState, useRef, useEffect } from "react";
import { FaMusic, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Auto play music when component mounts
  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Auto-play prevented:", error);
        // Auto-play might be blocked by browser
        setIsPlaying(false);
      }
    };

    // Try to play after a short delay
    const timer = setTimeout(() => {
      playAudio();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Play error:", error);
        }
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
    <div className="music-player">
      <audio ref={audioRef} loop preload="auto">
        {/* You can replace this with your own audio file */}
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <button
        className={`music-toggle ${isPlaying ? "playing" : ""}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <FaMusic className="music-icon" />
        {!isPlaying && <div className="music-pause-line"></div>}
      </button>

      <button
        className="music-volume"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default MusicPlayer;
