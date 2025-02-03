// app/components/FloatingBalloons.tsx
"use client"; // Required for interactivity
import { motion } from "framer-motion";
import { useState } from "react";

const messageParts = [
  "From the moment I first saw you, my heart knew something extraordinary had begun.",
  "It was a simple moment—you, caring for those dogs with so much kindness and warmth—but it was in that moment I saw the beauty of your soul.",
  "Your compassion, your grace, and the way you care for others made me feel something I couldn’t even explain.",
  "I was captivated, not just by your outer beauty, but by the light within you that shines so brightly.",
];

export default function FloatingBalloons() {
  const [revealedParts, setRevealedParts] = useState<number[]>([]);

  const handleBalloonClick = (index: number) => {
    if (!revealedParts.includes(index)) {
      setRevealedParts([...revealedParts, index]);
    }
  };

  return (
    <>
      {/* Balloons */}
      {messageParts.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: "100vh" }}
          animate={{ y: "-100vh" }}
          transition={{
            duration: 10 + Math.random() * 10, // Random speed
            repeat: Infinity,
            repeatType: "loop",
          }}
          onClick={() => handleBalloonClick(index)}
          className="fixed cursor-pointer text-6xl"
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal position
            zIndex: 9999, // Ensure balloons are above other content
          }}
        >
          🎈
        </motion.div>
      ))}

      {/* Revealed Messages */}
      <div className="fixed bottom-0 left-0 right-0 p-8 text-center z-50">
        {revealedParts.map((index) => (
          <p key={index} className="text-lg text-gray-700 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
            {messageParts[index]}
          </p>
        ))}
      </div>
    </>
  );
}