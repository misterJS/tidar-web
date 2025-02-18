"use client";
import React from "react";
import Typography from "@/components/atoms/Typography";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-10 px-6 flex flex-col items-center text-center">
      <Image
        src="/images/logo.png"
        alt="TIDAR Logo"
        width={80}
        height={80}
        className="mb-4"
      />
      <Typography variant="h3" className="mb-4 text-accent">
        TIDAR Kabupaten Bekasi
      </Typography>
      <Typography variant="body" className="mb-6 max-w-lg">
        Membangun kepemimpinan generasi muda yang tangguh dan berintegritas
        untuk Indonesia yang lebih baik.
      </Typography>
      <div className="flex space-x-6">
        <Link href="#" className="hover:text-accent transition-all">
          Tentang
        </Link>
        <Link href="#" className="hover:text-accent transition-all">
          Media
        </Link>
        <Link href="#" className="hover:text-accent transition-all">
          Artikel
        </Link>
      </div>
      <div className="mt-6 text-sm text-gray-400">
        © 2025 TIDAR Kabupaten Bekasi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
