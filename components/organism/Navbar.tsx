"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                <Link href="#" className="hover:text-accent">
                    <Typography variant="body">Media</Typography>
                </Link>
                <Link href="/pengurus" className="hover:text-accent">
                    <Typography variant="body">Pengurus</Typography>
                </Link>
                <Button text="Daftar" variant="primary" className="hidden md:block" />
            </nav>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`absolute top-16 left-0 w-full bg-background text-foreground flex flex-col items-center py-4 space-y-4 md:hidden ${isOpen ? "block" : "hidden"}`}
            >
                <Link href="/tentang" className="hover:text-accent" onClick={() => setIsOpen(false)}>
                    <Typography variant="body">Tentang</Typography>
                </Link>
                <Link href="#" className="hover:text-accent" onClick={() => setIsOpen(false)}>
                    <Typography variant="body">Media</Typography>
                </Link>
                <Link href="/pengurus" className="hover:text-accent" onClick={() => setIsOpen(false)}>
                    <Typography variant="body">Pengurus</Typography>
                </Link>
                <Button className="w-1/2" text="Daftar" variant="primary" onClick={() => setIsOpen(false)} />
            </motion.nav>
        </header>
    );
};

export default Navbar;
