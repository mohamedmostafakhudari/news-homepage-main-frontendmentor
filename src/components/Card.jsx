import React from "react";

export default function Card({ order, title, text, imgSrc }) {
  return (
    <div className="flex gap-6 md:w-[48%] lg:w-auto">
      <div className="min-w-[100px] max-w-[100px]">
        <img src={imgSrc} alt={title} className="object-cover object-center" />
      </div>
      <div className="space-y-2 md:space-y-1">
        <h2 className="text-grayish-blue font-bold text-4xl md:text-3xl">
          0{order}
        </h2>
        <h3 className="text-very-dark-blue font-bold text-2xl duration-200 ease-in-out cursor-pointer hover:text-soft-red md:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-gray-600 md:text-sm xl:text-lg">{text}</p>
      </div>
    </div>
  );
}
