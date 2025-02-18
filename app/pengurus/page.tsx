"use client";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Typography from "@/components/atoms/Typography";
import { useEffect, useState } from "react";

const pengurusData = [
  {
    name: "Dhieto Yama",
    position: "Ketua PD Tidar Kab. Bekasi",
    image: "/images/people.webp",
  },
  {
    name: "Rina Setiawan",
    position: "Sekretaris",
    image: "/images/people.webp",
  },
  {
    name: "Budi Santoso",
    position: "Bendahara",
    image: "/images/people.webp",
  },
  {
    name: "Dewi Kartika",
    position: "OKK",
    image: "/images/people.webp",
  },
];

export default function Pengurus() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col gap-16 items-center text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isRendered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Typography variant="h1" className="mb-6 text-primary">
            Pengurus TIDAR
          </Typography>
          <Typography variant="body" className="max-w-2xl text-gray-700">
            Berikut adalah para pengurus utama yang memimpin Tunas Indonesia
            Raya dalam menjalankan visi dan misinya.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {pengurusData.map((pengurus, index) => (
            <motion.div
              key={index}
              layoutId={`pengurus-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isRendered ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center"
            >
              <Image
                src={pengurus.image}
                alt={pengurus.name}
                width={150}
                height={150}
                className="rounded-full shadow-md mb-4"
              />
              <Typography variant="h2" className="text-primary">
                {pengurus.name}
              </Typography>
              <Typography variant="body" className="text-gray-600">
                {pengurus.position}
              </Typography>
            </motion.div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
