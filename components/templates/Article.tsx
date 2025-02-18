"use client";
import React from "react";
import { motion } from "framer-motion";
import Typography from "@/components/atoms/Typography";

const articles = [
  {
    title: "Peran Pemuda dalam Politik Indonesia",
    description: "Bagaimana pemuda dapat berkontribusi dalam politik dan pembangunan negara.",
    date: "12 Februari 2025",
  },
  {
    title: "Strategi Kepemimpinan Generasi Muda",
    description: "Membangun jiwa kepemimpinan yang kuat di era modern.",
    date: "10 Februari 2025",
  },
  {
    title: "Pentingnya Kolaborasi di Era Digital",
    description: "Kenapa kerja sama dan inovasi menjadi kunci sukses generasi saat ini.",
    date: "8 Februari 2025",
  },
];

const Article: React.FC = () => {
  return (
    <section className="py-28 px-5 w-full items-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Typography variant="h1" className="mb-12">
          Artikel Terkini
        </Typography>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-100 rounded-xl shadow-lg w-full cursor-pointer sm:w-80"
          >
            <Typography variant="h2" className="mb-2">
              {article.title}
            </Typography>
            <Typography variant="caption" className="text-gray-600 mb-4">
              {article.date}
            </Typography>
            <Typography variant="body" className="text-gray-800">
              {article.description}
            </Typography>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Article;