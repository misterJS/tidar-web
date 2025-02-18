"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);

  return (
    <header className="bg-background text-foreground py-4 px-6 flex justify-between items-center relative">
      <Link href="/">
        <Image src="/images/logo.png" alt="TIDAR Logo" width={50} height={25} />
      </Link>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className="hidden md:flex space-x-6 items-center">
        <Link href="/tentang" className="hover:text-accent">
          <Typography variant="body">Tentang</Typography>
        </Link>
        <div className="relative">
          <button
            onClick={() => setIsMediaOpen(!isMediaOpen)}
            className="flex items-center hover:text-accent"
          >
            <Typography variant="body">Media</Typography>
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform ${
                isMediaOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isMediaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link
                href="/media/foto"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                <Typography variant="body">Foto</Typography>
              </Link>
              <Link
                href="/media/artikel"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                <Typography variant="body">Artikel</Typography>
              </Link>
            </motion.div>
          )}
        </div>
        <Link href="/pengurus" className="hover:text-accent">
          <Typography variant="body">Pengurus</Typography>
        </Link>
        <Button text="Daftar" variant="primary" className="hidden md:block" />
      </nav>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute top-16 left-0 w-full bg-background text-foreground flex flex-col items-center py-4 space-y-4 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link
          href="/tentang"
          className="hover:text-accent"
          onClick={() => setIsOpen(false)}
        >
          <Typography variant="body">Tentang</Typography>
        </Link>
        <div className="relative w-full text-center">
          <button
            onClick={() => setIsMediaOpen(!isMediaOpen)}
            className="flex justify-center items-center w-full hover:text-accent"
          >
            <Typography variant="body">Media</Typography>
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform ${
                isMediaOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isMediaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-2 w-full bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link
                href="/media/foto"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <Typography variant="body">Foto</Typography>
              </Link>
              <Link
                href="/media/artikel"
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <Typography variant="body">Artikel</Typography>
              </Link>
            </motion.div>
          )}
        </div>
        <Link
          href="/pengurus"
          className="hover:text-accent"
          onClick={() => setIsOpen(false)}
        >
          <Typography variant="body">Pengurus</Typography>
        </Link>
        <Button
          className="w-1/2"
          text="Daftar"
          variant="primary"
          onClick={() => setIsOpen(false)}
        />
      </motion.nav>
    </header>
  );
};

export default Navbar;
