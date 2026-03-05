export interface Wing {
  code: string;
  name: string;
  desc: string;
}

export interface EnneagramType {
  num: number;
  name: string;
  emoji: string;
  traits: string[];
  fear: string;
  desire: string;
  wings: Wing[];
}

export const types: EnneagramType[] = [
  {
    num: 1, name: "The Reformer", emoji: "⚖️",
    traits: ["Principled", "Purposeful", "Self-controlled", "Perfectionistic"],
    fear: "Being corrupt or defective",
    desire: "To be good and have integrity",
    wings: [
      { code: "1w9", name: "The Idealist", desc: "More detached, calm, objective, philosophical" },
      { code: "1w2", name: "The Advocate", desc: "More warm, helpful, critical of injustice, action-oriented" }
    ]
  },
  {
    num: 2, name: "The Helper", emoji: "💝",
    traits: ["Generous", "Demonstrative", "People-pleasing", "Possessive"],
    fear: "Being unloved or unwanted",
    desire: "To feel loved",
    wings: [
      { code: "2w1", name: "The Servant", desc: "More idealistic, principled, self-critical, controlled" },
      { code: "2w3", name: "The Host/Hostess", desc: "More ambitious, image-conscious, charming, outgoing" }
    ]
  },
  {
    num: 3, name: "The Achiever", emoji: "🏆",
    traits: ["Adaptable", "Excelling", "Driven", "Image-conscious"],
    fear: "Being worthless or without value",
    desire: "To feel valuable and worthwhile",
    wings: [
      { code: "3w2", name: "The Charmer", desc: "More sociable, encouraging, people-oriented, flattering" },
      { code: "3w4", name: "The Professional", desc: "More introspective, emotionally aware, artistic, reserved" }
    ]
  },
  {
    num: 4, name: "The Individualist", emoji: "🎨",
    traits: ["Expressive", "Dramatic", "Self-absorbed", "Temperamental"],
    fear: "Having no identity or personal significance",
    desire: "To find themselves and their significance",
    wings: [
      { code: "4w3", name: "The Aristocrat", desc: "More ambitious, polished, sociable, competitive" },
      { code: "4w5", name: "The Bohemian", desc: "More withdrawn, intellectual, unconventional, private" }
    ]
  },
  {
    num: 5, name: "The Investigator", emoji: "🔍",
    traits: ["Perceptive", "Innovative", "Secretive", "Isolated"],
    fear: "Being helpless, incapable, or overwhelmed",
    desire: "To be capable and competent",
    wings: [
      { code: "5w4", name: "The Iconoclast", desc: "More creative, subjective, emotionally intense, independent" },
      { code: "5w6", name: "The Problem Solver", desc: "More analytical, loyal, cautious, collaborative" }
    ]
  },
  {
    num: 6, name: "The Loyalist", emoji: "🛡️",
    traits: ["Engaging", "Responsible", "Anxious", "Suspicious"],
    fear: "Being without support or guidance",
    desire: "To have security and support",
    wings: [
      { code: "6w5", name: "The Defender", desc: "More introverted, analytical, independent, detached" },
      { code: "6w7", name: "The Buddy", desc: "More outgoing, playful, distractible, reassurance-seeking" }
    ]
  },
  {
    num: 7, name: "The Enthusiast", emoji: "✨",
    traits: ["Spontaneous", "Versatile", "Distractible", "Scattered"],
    fear: "Being deprived or trapped in pain",
    desire: "To be satisfied and fulfilled",
    wings: [
      { code: "7w6", name: "The Entertainer", desc: "More loyal, endearing, anxious, relationship-oriented" },
      { code: "7w8", name: "The Realist", desc: "More assertive, pragmatic, competitive, intense" }
    ]
  },
  {
    num: 8, name: "The Challenger", emoji: "💪",
    traits: ["Self-confident", "Decisive", "Willful", "Confrontational"],
    fear: "Being controlled or harmed by others",
    desire: "To protect themselves and control their fate",
    wings: [
      { code: "8w7", name: "The Maverick", desc: "More energetic, outgoing, impulsive, entrepreneurial" },
      { code: "8w9", name: "The Bear", desc: "More calm, receptive, stubborn, quietly commanding" }
    ]
  },
  {
    num: 9, name: "The Peacemaker", emoji: "🕊️",
    traits: ["Receptive", "Reassuring", "Agreeable", "Complacent"],
    fear: "Loss and separation",
    desire: "Inner peace and stability",
    wings: [
      { code: "9w8", name: "The Comfort Seeker", desc: "More assertive, grounded, stubborn, body-aware" },
      { code: "9w1", name: "The Dreamer", desc: "More idealistic, orderly, detached, principled" }
    ]
  }
];
