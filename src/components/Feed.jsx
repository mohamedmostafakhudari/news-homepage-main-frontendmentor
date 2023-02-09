import React from "react";
import FeedItem from "./FeedItem";
import { nanoid } from "nanoid";
import { useState } from "react";
const initialNews = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch-up to EVs",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means",
  },
];
export default function Feed() {
  const [news, setNews] = useState(initialNews);
  return (
    <div className="flex-1 bg-very-dark-blue p-4 text-soft-orange mt-12 md:max-w-xs md:mt-0 xl:min-w-[500px]">
      <h3 className="text-2xl font-bold xl:text-4xl">New</h3>
      <ul>
        {news.map(({ title, text }) => {
          return <FeedItem key={nanoid()} title={title} text={text} />;
        })}
      </ul>
    </div>
  );
}
