import React from "react";
import useWindowSize from "../../src/hooks/useWindowSize";
import { useActive, useActiveToggle } from "../context";
export default function Navbar() {
  const { width, height } = useWindowSize();
  const active = useActive();
  const activeToggle = useActiveToggle();
  return (
    <nav className="pt-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div>
          <img src="./assets/images/logo.svg" alt="logo" />
        </div>
        {width > 767 ? (
          <ul className="flex items-center text-gray-800 text-lg gap-4 xl:text-xl">
            <li className="px-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
              Home
            </li>
            <li className="px-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
              New
            </li>
            <li className="px-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
              Popular
            </li>
            <li className="px-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
              Trending
            </li>
            <li className="px-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
              Categories
            </li>
          </ul>
        ) : (
          <>
            <div
              id="hamburger"
              onClick={activeToggle}
              className={`w-[50px] space-y-1 cursor-pointer z-20 ${
                active && "active"
              }`}
            >
              <span className="w-full bg-gray-800 h-[3px] block duration-200 ease-in-out"></span>
              <span className="w-full bg-gray-800 h-[3px] block  duration-200 ease-in-out"></span>
              <span className="w-full bg-gray-800 h-[3px] block duration-200 ease-in-out"></span>
            </div>
            <div
              id="menu"
              className={`absolute bg-white top-0 bottom-0 right-0 min-w-[250px] z-10 duration-200 ease-in-out shadow-md ${
                !active && "translate-x-full"
              }`}
            >
              <ul className="py-32 text-gray-800 space-y-4">
                <li className="px-6 cursor-pointer text-lg ease-in-out duration-200 hover:text-soft-red">
                  Home
                </li>
                <li className="px-6 cursor-pointer text-lg ease-in-out duration-200 hover:text-soft-red">
                  New
                </li>
                <li className="px-6 cursor-pointer text-lg ease-in-out duration-200 hover:text-soft-red">
                  Popular
                </li>
                <li className="px-6 cursor-pointer text-lg ease-in-out duration-200 hover:text-soft-red">
                  Trending
                </li>
                <li className="px-6 cursor-pointer text-lg ease-in-out duration-200 hover:text-soft-red">
                  Categories
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
