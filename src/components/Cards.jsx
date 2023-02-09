import { useState } from "react";
import { nanoid } from "nanoid";
import Card from "./Card";
let nextId = 0;
const initialCards = [
  {
    order: ++nextId,
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    imgSrc: "../../src/assets/images/image-retro-pcs.jpg",
  },
  {
    order: ++nextId,
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
    imgSrc: "../../src/assets/images/image-top-laptops.jpg",
  },
  {
    order: ++nextId,
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    imgSrc: "../../src/assets/images/image-gaming-growth.jpg",
  },
];
export default function Cards() {
  const [cards, setCards] = useState(initialCards);
  return (
    <section className="px-4 pb-20 mt-4">
      <div className="container mx-auto flex flex-col gap-10 md:flex-wrap md:flex-row md:gap-6 lg:flex-nowrap">
        {cards.map(({ order, title, text, imgSrc }) => (
          <Card
            key={nanoid()}
            order={order}
            title={title}
            text={text}
            imgSrc={imgSrc}
          />
        ))}
      </div>
    </section>
  );
}
