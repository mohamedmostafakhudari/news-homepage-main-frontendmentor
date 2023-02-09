import React from "react";

export default function Main() {
  return (
    <div className="flex-1">
      <div>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="../../src/assets/images/image-web-3-mobile.jpg"
          />
          <img
            src="../../src/assets/images/image-web-3-desktop.jpg"
            alt="cover"
          />
        </picture>
      </div>
      <div className="flex flex-col flex-wrap justify-between mt-4 md:flex-row">
        <h1 className="text-very-dark-blue text-5xl font-extrabold  max-w-[10ch] md:max-w-[14ch] md:min-w-[250px] lg:max-w-[10ch] xl:text-6xl 2xl:text-7xl xl:max-w-[8ch]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="">
          <p className="text-gray-600 text-sm mt-4 max-w-[36ch] xl:text-lg xl:leading-10 2xl:text-2xl 2xl:leading-10">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href="#"
            className="block bg-soft-red text-white uppercase font-bold tracking-[5px] text-xs py-4 w-fit px-8 mt-6 duration-100 ease-in-out hover:bg-very-dark-blue xl:text-lg xl:mt-12"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
}
