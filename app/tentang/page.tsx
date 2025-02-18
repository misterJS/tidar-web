"use client";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Typography from "@/components/atoms/Typography";
import { useEffect, useState } from "react";

const timelineData = [
  {
    year: "2008",
    title: "TIDAR Didirikan",
    description:
      "Tunas Indonesia Raya (TIDAR) resmi berdiri sebagai organisasi kepemudaan yang bertujuan membangun karakter pemimpin muda di Indonesia.",
    image: "/images/tidar.jpg",
  },
  {
    year: "2012",
    title: "Perluasan Wilayah",
    description:
      "TIDAR berkembang dan membuka cabang di berbagai kota besar, memberikan pelatihan kepemimpinan kepada ribuan pemuda.",
    image: "/images/tidar.jpg",
  },
  {
    year: "2016",
    title: "Gerakan Sosial Besar",
    description:
      "Meluncurkan berbagai program sosial, termasuk gerakan literasi dan edukasi politik untuk generasi muda.",
    image: "/images/tidar.jpg",
  },
  {
    year: "2021",
    title: "Pengaruh di Skala Nasional",
    description:
      "TIDAR semakin dikenal sebagai organisasi kepemudaan yang berpengaruh di Indonesia, aktif dalam berbagai forum nasional dan internasional.",
    image: "/images/tidar.jpg",
  },
];

export default function Tentang() {
  const [isRendered, setIsRendered] = useState<boolean>(false);

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
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography variant="h1" className="mb-6 text-primary">
            Tentang TIDAR
          </Typography>
          <Typography variant="body" className="max-w-2xl text-gray-700">
            Tunas Indonesia Raya (TIDAR) adalah organisasi kepemudaan yang
            berkomitmen untuk membentuk generasi muda yang tangguh, berwawasan
            luas, dan memiliki semangat kebangsaan. Kami percaya bahwa pemuda
            adalah ujung tombak perubahan dan kemajuan bangsa.
          </Typography>
        </motion.div>

        <div className="w-full max-w-4xl px-4">
          <Typography variant="h2" className="mb-8 text-primary">
            Sejarah Perjalanan TIDAR
          </Typography>
          <div className="relative border-l-4 border-dashed border-primary pl-6">
            {timelineData.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isRendered ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className={`relative mb-12 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-[-36px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-white shadow-md"></div>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <div className="text-left max-w-lg">
                  <Typography variant="h3" className="text-accent">
                    {event.year}
                  </Typography>
                  <Typography variant="h2" className="text-primary">
                    {event.title}
                  </Typography>
                  <Typography variant="body" className="text-gray-700">
                    {event.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
