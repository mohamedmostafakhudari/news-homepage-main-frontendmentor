import React from "react";

export default function Card({ order, title, text, imgSrc }) {
  return (
    <div className="flex gap-6 md:gap-6">
      <div className="max-w-[120px]">
        <img
          src={imgSrc}
          alt={title}
          className="h-full object-contain object-center"
        />
      </div>
      <div className="space-y-2 md:space-y-1">
        <h2 className="text-grayish-blue font-bold text-4xl md:text-3xl">
          0{order}
        </h2>
        <h3 className="text-very-dark-blue font-bold text-2xl md:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-gray-600 md:text-sm xl:text-lg">{text}</p>
      </div>
    </div>
  );
}
