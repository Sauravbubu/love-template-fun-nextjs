// app/components/MessageReveal.tsx
"use client"; // Required for interactivity
import { motion } from "framer-motion";
import { useState } from "react";

const messageParts = [
  "From the moment I first saw you, my heart knew something extraordinary had begun.",
  "Your kindness, your grace, and the way you care for others made me feel something I couldn’t even explain.",
  "Every moment with you feels like a gift. You make me feel like I’m the most special person in the world.",
  "I can’t imagine my life without you, because you’ve become my everything.",
];

export default function MessageReveal() {
  const [revealedParts, setRevealedParts] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (!revealedParts.includes(index)) {
      setRevealedParts([...revealedParts, index]);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <div className="flex space-x-4">
        {messageParts.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(index)}
            className="cursor-pointer text-4xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>
      <div className="text-center space-y-4">
        {revealedParts.map((index) => (
          <p key={index} className="text-lg text-gray-700">
            {messageParts[index]}
          </p>
        ))}
      </div>
    </div>
  );
}