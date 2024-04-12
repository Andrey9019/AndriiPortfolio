import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f1e38] text-white py-4 px-8 z-10">
      <ul className="flex justify-between items-center">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};
