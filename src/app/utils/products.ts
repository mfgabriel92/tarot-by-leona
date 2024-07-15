export interface Product {
  id: number;
  image: string;
  name: string;
  nickname?: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    image: "cherry-blossom-agate.png",
    name: "Cherry Blossom Agate",
    nickname: "Reblooming Stone",
    description:
      "An gorgeous stone like it's name, sakura agate or cherry blossom flower agate is a stone known to provide strength in overcoming painful situation and aids wearers to bloom to its full potential. A transformational stone, it supports fulfillment and growth to be resilient in every situation. It brings prosperity especially to business and serenity to those who endures.",
    price: 450,
  },
  {
    id: 2,
    image: "dream-amethyst.png",
    name: "Dream Amethyst",
    description:
      "Like its namesake, the dream amethyst is a powerful crystal that provides comfort and ease during sleep. It helps in releasing stress and may provide relief in numerous health conditions such as migraine, headaches, and insomnia. It is also a stone known to increase psychic abilities and aids in strengthening your crown chakra and third eye chakra.",
    price: 340,
  },
  {
    id: 3,
    image: "garnet-bracelet.png",
    name: "Garnet",
    nickname: "Red Lucky Stone",
    description:
      "Garnet has alot of magical properties. It is known to bring healing from heart break while inspire passionate love. Just like its robust red color, it is known to balance energies. Garnet invigorates a wearer and brings passion to sexual relationships. Moreover, it aids in letting go toxic behaviors and old patterns.Overall, it is a lucky stone for love, sex, and business.",
    price: 350,
  },
  {
    id: 4,
    image: "golden-obsidian.png",
    name: "Golen Obsidian",
    description:
      "A beautiful two-toned stone, the golden obsidian is an excellent stone for overall grounding, transformation and protection. It supports in dissolving blocks in life and cuts through unwanted energies that seeks to control and manipulate. It is best when used during meditation to envision transformation, removing blocks and helping uncover unique talents and undiscovered abilites. It is a poweful stone that emits strong protective energies like barriers.",
    price: 450,
  },
  {
    id: 5,
    image: "green-aventurine.png",
    name: "Green Aventurine",
    nickname: "Stone of Opportunity",
    description:
      "Known to be the luckiest of all stone, aventurine is known to manifest luck, success, money and opportunities to your life in general. Aventurine brings prosperity, renewal and growth, similarly to its beautiful lush green color. Moreover, due to its color, it aids in healing your heart chakra specifically childhood related traumas.",
    price: 450,
  },
  {
    id: 6,
    image: "red-eyes-tiger.png",
    name: "Red Eyes Tiger",
    nickname: "Stone of Survival",
    description:
      "An all-around stone, red tiger's eye is known to give wearer vitality, energy and confidence. Known for its many healing benefits, red tiger's eye is a stone that increases motivation, while it helps dissolve fear, anxiety, stress and depression. It is also an extremely empowering stone that promotes creativity and courage in decision-making.",
    price: 340,
  },
  {
    id: 7,
    image: "rose-quartz.png",
    name: "Rose Quartz",
    nickname: "Stone of Unconditional Love",
    description:
      "A fabulous stone known for its powerful properties, the rose quartz stone a beautiful pink crystal known to emit strong vibration of love and healing. It is an extremely calming stone helpful in supporting the heart for relationship and emotional well-being. It helps in releasing stress, clears the heart chakra, and provides comfort.",
    price: 340,
  },
];
