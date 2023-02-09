import React from "react";

export default function FeedItem({ title, text }) {
  return (
    <li className="border-b-2 py-6 border-b-dark-grayish-blue last:border-b-0">
      <h4 className="text-white font-bold text-lg duration-200 ease-in-out cursor-pointer hover:text-soft-orange">
        {title}
      </h4>
      <p className="text-off-white text-sm mt-1">{text}</p>
    </li>
  );
}
