"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typography from "@/components/atoms/Typography";
import Card from "@/components/molecules/Card";
import PopupGallery from "@/components/organism/PopupGallery";

const Activity: React.FC = () => {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const images = [
    "https://asset.kompas.com/crops/gIRaAmuAmqCisUf7S5bnccZMRKE=/0x0:599x399/1200x800/data/photo/2022/11/18/63770e3800e27.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTYREXmEpoDPLkym_1nUjo0OjPudTvvKV3g&s",
  ];

  return (
    <section className="py-28 px-5 w-full items-center bg-card">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isRendered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Typography className="mb-12" variant="h1">
          Kegiatan Tidar Kabupaten Bekasi
        </Typography>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-8 py-4 justify-center">
        {["Tunas 1 dan 2", "Tanam Mangrove", "Hut Gerindra"].map(
          (title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isRendered ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <Card
                title={title}
                description="Demi menuntaskan program tidar"
                buttonText="Lihat Kegiatan"
                onImageClick={() => setIsOpen(true)}
                imageUrl={images[index % images.length]}
              />
            </motion.div>
          )
        )}
      </div>
      <PopupGallery
        images={images}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
};

export default Activity;
