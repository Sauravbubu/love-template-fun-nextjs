// app/components/PuzzlePieces.tsx
"use client"; // Required for interactivity
import { useState, useEffect } from "react";

const messageParts = [
    "I remember our first conversation—how your words made me feel so at ease. It was then I realized how much I wanted to know you better.",
    "Your smile is like sunshine on a cloudy day. It brightens everything around you, and I feel so lucky to be the reason behind it sometimes.",
    "It’s the little things you do—like remembering my favorite food or asking about my day—that make me feel so loved and appreciated.",
    "When I think about the future, I see you in every moment. You’ve become such an important part of my dreams, and I can’t wait to build them with you.",
  ];

export default function PuzzlePieces({ onComplete }: { onComplete: () => void }) {
  const [revealedParts, setRevealedParts] = useState<boolean[]>(Array(messageParts.length).fill(false));

  const handlePieceClick = (index: number) => {
    const newRevealedParts = [...revealedParts];
    newRevealedParts[index] = true;
    setRevealedParts(newRevealedParts);
  };

  // Check if all pieces are revealed
  useEffect(() => {
    if (revealedParts.every((part) => part)) {
      onComplete(); // Trigger the callback when all pieces are revealed
    }
  }, [revealedParts, onComplete]);

  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Piece Together Our Story</h2>
      <div className="grid grid-cols-2 gap-4">
        {messageParts.map((_, index) => (
          <div
            key={index}
            onClick={() => handlePieceClick(index)}
            className={`p-4 border-2 text-gray-800 border-dashed border-pink-300 cursor-pointer ${
              revealedParts[index] ? "bg-pink-100" : "bg-white"
            }`}
          >
            {revealedParts[index] ? messageParts[index] : `🧩${index+1}`}
          </div>
        ))}
      </div>
    </div>
  );
}