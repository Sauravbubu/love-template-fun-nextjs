// app/components/Timeline.tsx
import Image from "next/image";
import React from "react";

const milestones = [
  {
    date: "The First Day",
    description:
      "The day I first saw you, my heart skipped a beat. You were caring for those dogs with so much kindness and warmth, and in that moment, I saw the beauty of your soul. I knew something extraordinary had begun.",
    image: "/images/dog-park.jpg", // Add your image path here
  },
  {
    date: "Your Mom’s Birthday",
    description:
      "On your mom’s birthday, we blew up balloons together, and I couldn’t take my eyes off you. You were breathtaking—your eyes, your smile, the way you spoke—everything about you left me speechless. I was lost in your presence.",
    image: "/images/balloons.jpg", // Add your image path here
  },
  {
    date: "Our Special Moments",
    description:
      "Every moment with you feels like a gift. Whether we’re talking, laughing, or just being together, you make me feel like I’m the most special person in the world. I cherish every second with you.",
    image: "/images/sunset.jpg", // Add your image path here
  },
  {
    date: "The Food You Make",
    description:
      "The delicious food you make for me is more than just a meal—it’s a reflection of your care and love. Every bite reminds me of how lucky I am to have you in my life.",
    image: "/images/food.jpg", // Add your image path here
  },
  {
    date: "The Bond We Share",
    description:
      "You’ve become such an important part of my life, and I can’t imagine a future without you. Every day with you feels like a blessing, and I’m so grateful for the bond we share.",
    image: "/images/bond.jpg", // Add your image path here
  },
];

export default function Timeline() {
  return (
    <div className="flex flex-col space-y-8 p-8">
      <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Our Journey Together
      </h2>
      {milestones.map((milestone, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Image
                 src={milestone.image}
                 alt={milestone.date}
                 width={196}
                 height={196}
                 className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl text-gray-800 font-semibold">{milestone.date}</h3>
            <p className="text-gray-600">{milestone.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}