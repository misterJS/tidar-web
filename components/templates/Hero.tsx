"use client";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import React from "react";
import Typography from "@/components/atoms/Typography";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="px-6 py-28 items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography variant="h1" className="text-primary">
          TIDAR
        </Typography>
        <Typography variant="h2">Tunas Indonesia Raya</Typography>
        <Typography variant="caption">Kabupaten Bekasi</Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="flex flex-row gap-8 py-4 justify-center"
      >
        <Button text="Daftar Tidar" />
        <Button variant="secondary" text="Info Kegiatan" />
      </motion.div>
    </section>
  );
};

export default Hero;
