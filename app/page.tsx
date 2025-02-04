// app/page.tsx
"use client"; // Required for interactivity
import { useState } from "react";
import Confetti from "react-confetti";
import FloatingBalloons from "./components/FloatingBalloons";
import Timeline from "./components/TimeLine";
import PuzzlePieces from "./components/PuzzlePieces";
import FinalMessage from "./components/FinalMessage";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const correctPassword = "gugulu"; // Replace with your special date

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const password = (e.target as HTMLFormElement).password.value;
    if (String(password)?.toLowerCase() === correctPassword) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-purple-100">
        <form onSubmit={handleSubmit} className="text-center">
          <input
            type="text"
            name="password"
            placeholder="Pin :Your special Name"
            className="p-2 border-2 border-pink-300 rounded mb-4"
          />
          <button
            type="submit"
            className="w-16 h-16 flex ml-16 items-center justify-center bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          Click
          </button>
        </form>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100">
      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/romantic-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Balloons */}
      <FloatingBalloons />

      {/* Timeline */}
      <Timeline />

      {/* Puzzle Pieces */}
      <PuzzlePieces onComplete={() => setShowFinalMessage(true)} />

      {/* Final Message with Confetti */}
      {showFinalMessage && (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <FinalMessage />
        </>
      )}
    </main>
  );
}