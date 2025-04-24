import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-zinc-100 w-full  py-6 px-4 flex flex-col items-center gap-6 sm:flex-row sm:justify-between max-sm:px-10 flex-grow ">
      <p className="text-center sm:text-left">
        Desarrollado por <strong>Michael Conde</strong>
      </p>
      
      <Navbar>
        <ul className="flex gap-6 justify-center sm:justify-end sm:gap-8">
          <ItemNavbar styles="w-10 text-3xl" content={<FaFacebook />} />
          <ItemNavbar styles="w-10 text-3xl" content={<FaInstagram />} />
          <ItemNavbar styles="w-10 text-3xl" content={<FaXTwitter />} />
          <ItemNavbar styles="w-10 text-3xl" content={<FaGithub />} />
        </ul>
      </Navbar>
    </footer>
  );
};
