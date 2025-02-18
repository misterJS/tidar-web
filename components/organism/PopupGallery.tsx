"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopupGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const PopupGallery: React.FC<PopupGalleryProps> = ({
  images,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-lg w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-64">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt="Gallery Image"
                className="w-full h-full object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between w-full mt-4">
              <button
                onClick={prevImage}
                className="bg-gray-700 text-white p-2 rounded"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="bg-gray-700 text-white p-2 rounded"
              >
                ▶
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupGallery;
