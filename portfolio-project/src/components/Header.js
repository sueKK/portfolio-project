import React from "react";

const Header = () => {
  return (
    <div className = "">
    <header className="flex justify-between items-center py-4 px-8 border-b border-[#1f1e1c]">
     <h1 className="text-2xl font-bold">SUE-KK</h1>
      <nav className="flex gap-8">
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
    </div>
  );
};

export default Header;
