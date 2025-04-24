import React, { useState } from "react";
import { Navbar } from '../Navbar/Navbar';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar.jsx';
import { ItemText } from "../../components/Text/ItemText.jsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 left-0 z-50 w-full h-[8rem] flex-col
 bg-zinc-100 flex items-center content-center justify-center px-6 py-4 text-black shadow-md">
  <ItemText content="Rick And Morty" style='text-7xl mb-5' />


      <Navbar style='flex justify-between'>  
        <ItemNavbar route="/" styles="mr-15"content="Rick And Morty" />
        <ItemNavbar route="/" styles="mr-15"content="Cats" />
        <ItemNavbar route="/" styles="mr-15"content="Gifts" />
      </Navbar>
    </header>
  );
};