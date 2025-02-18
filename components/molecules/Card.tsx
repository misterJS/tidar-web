"use client";
import React, { useState } from "react";
import Typography from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string | string[];
  buttonText?: string;
  onButtonClick?: () => void;
  onImageClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
  onImageClick,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl overflow-hidden w-full sm:w-80 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-48">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt={title}
            onClick={onImageClick}
            className="absolute w-full h-48 object-cover cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
            >
              ▶
            </button>
          </>
        )}
      </div>
      <div className="px-5 py-4">
        <Typography variant="h3" className="text-left font-semibold">
          {title}
        </Typography>
        <Typography variant="body" className="text-gray-600 text-left mb-4">
          {description}
        </Typography>
        {buttonText && (
          <div className="flex justify-end">
            <Button
              text={buttonText}
              onClick={onButtonClick}
              variant="accent"
              size="medium"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
