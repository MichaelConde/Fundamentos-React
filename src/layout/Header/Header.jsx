import React, { useState } from "react";
import { Navbar } from '../Navbar/Navbar';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar.jsx';
import { ItemText } from "../../components/Text/ItemText.jsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 left-0 z-50 w-full flex flex-col bg-zinc-100 text-black shadow-md">
      <div className="w-full flex items-center justify-between px-6 py-4">
        <ItemText content="Productos API" style="text-3xl md:text-5xl font-bold" />
      </div>
    </header>
  );
};
