import React from "react";

export default function Navbar() {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="../../src/assets/images/logo.svg" alt="logo" />
        </div>
        <ul className="flex items-center text-gray-500 text-lg gap-4">
          <li className="p-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
            Home
          </li>
          <li className="p-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
            New
          </li>
          <li className="p-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
            Popular
          </li>
          <li className="p-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
            Trending
          </li>
          <li className="p-4 cursor-pointer ease-in-out duration-200 hover:text-soft-red">
            Categories
          </li>
        </ul>
      </div>
    </nav>
  );
}
