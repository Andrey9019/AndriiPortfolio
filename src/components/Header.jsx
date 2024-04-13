import React from 'react';

export const Header = () => {
  const scrollToSection = id => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        easing: 'cubic-bezier(0.4, 0.7 , 0.5, 1)',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0f1e38] text-white py-4 px-8 z-10">
      <ul className="flex h-6 justify-between flex-no-wrap flex-row items-start">
        <li>
          <button
            className="text-white hover:text-[#06d6a0] focus:text-[#06d6a0] transition duration-300 hover:underline focus:underline"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-[#06d6a0] focus:text-[#06d6a0] transition duration-300 hover:underline focus:underline"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="text-white hover:text-[#06d6a0] focus:text-[#06d6a0] transition duration-300 hover:underline focus:underline"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </header>
  );
};
