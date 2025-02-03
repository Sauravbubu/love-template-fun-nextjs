// app/components/FinalMessage.tsx
"use client"; // Required for animations
import { motion } from "framer-motion";

export default function FinalMessage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-purple-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center p-8"
        >
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            My Dearest Secret Santa,
          </h1>
          <p className="text-lg text-gray-700">
            Since then, every moment with you has been a gift. You make me feel like I’m the most special person in the world. Your kindness, your care, the delicious food you make for me—it’s all so precious to me. I can’t imagine my life without you, because you’ve become my everything. You’ve given me a feeling I’ve never known before, a connection so pure and real that I want to cherish it for the rest of my life.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            By now, after reading my feelings, I think you already know why I’m so sure about you. It’s because you’ve shown me what it means to truly care for someone. You’ve taught me the value of kindness, the beauty of selflessness, and the joy of being with someone who makes every moment brighter. You’re not just someone I admire—you’re my inspiration, my safe place, and the reason I believe in something as beautiful as what we share.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            You’ve become such an important part of my life, and I can’t imagine a future without you. Every day with you feels like a blessing, and I’m so grateful for the bond we share. You’ve given me a feeling I’ve never known before, and I want to hold onto it forever.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            With all my heart,<br />
            <span className="font-bold">
            Tumarr Babu Shonna
            </span>
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-6xl mt-8"
          >
            ❤️
          </motion.div>
        </motion.div>
      </div>
    );
  }