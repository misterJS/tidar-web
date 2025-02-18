"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import { motion } from "framer-motion";
import Typography from "@/components/atoms/Typography";
import Image from "next/image";

const articles = {
  "peran-pemuda": {
    title: "Peran Pemuda dalam Pembangunan Bangsa",
    description:
      "Bagaimana pemuda dapat berkontribusi dalam membangun masa depan Indonesia.",
    date: "10 Februari 2025",
    image: "/images/tidar.jpg",
    content: `Pemuda memiliki peran besar dalam pembangunan bangsa. Dengan semangat dan inovasi, mereka dapat membawa perubahan signifikan dalam berbagai aspek kehidupan.

Pemuda memiliki kemampuan untuk berpikir kreatif, berinovasi, dan beradaptasi dengan perkembangan zaman. Dalam dunia pendidikan, misalnya, banyak pemuda yang menciptakan startup edukasi untuk membantu akses belajar yang lebih baik. Di bidang politik, pemuda mulai aktif dalam berbagai organisasi kepemudaan yang memberikan kontribusi terhadap kebijakan publik.

Selain itu, gerakan sosial yang digerakkan oleh pemuda mampu memberikan dampak besar pada masyarakat. Kampanye lingkungan, bantuan kemanusiaan, dan penggalangan dana untuk korban bencana adalah beberapa contoh nyata kontribusi pemuda dalam pembangunan bangsa.

Dengan adanya pemuda yang aktif dan peduli, masa depan Indonesia akan lebih cerah dan penuh dengan inovasi.`,
  },
};

const trendingArticles = [
  {
    title: "Peran Pemuda dalam Pembangunan Bangsa",
    description:
      "Bagaimana pemuda dapat berkontribusi dalam membangun masa depan Indonesia.",
    date: "10 Februari 2025",
    image: "/images/tidar.jpg",
  },
  {
    title: "Pentingnya Pendidikan Politik bagi Generasi Muda",
    description:
      "Memahami dasar-dasar politik untuk menciptakan pemimpin yang berkualitas.",
    date: "5 Februari 2025",
    image: "/images/tidar.jpg",
  },
  {
    title: "Gerakan Sosial dan Pengaruhnya terhadap Masyarakat",
    description: "Peran aktif komunitas dalam membantu masyarakat sekitar.",
    date: "1 Februari 2025",
    image: "/images/tidar.jpg",
  },
];

export default function DetailArtikel() {
  const [isRendered, setIsRendered] = useState(false);
  const params = useParams();
  const titleSlug = params?.slug;
  const article = articles[titleSlug as keyof typeof articles];

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!article) {
    return (
      <div className="text-center py-20">
        <Typography variant="h2">Artikel tidak ditemukan</Typography>
      </div>
    );
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col md:flex-row gap-10 items-start text-left py-20 px-6 max-w-6xl mx-auto">
        {/* Main Article Content */}
        <section className="w-full md:w-3/4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isRendered ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
            <Typography variant="h1" className="mb-6 text-primary">
              {article.title}
            </Typography>
            <Typography variant="body" className="text-gray-600 mb-4">
              {article.date}
            </Typography>
            <Typography
              variant="body"
              className="text-gray-700 whitespace-pre-line"
            >
              {article.content}
            </Typography>
          </motion.div>
        </section>

        {/* Sidebar */}
        <aside className="w-full md:w-1/4 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <span className="absolute right-4 top-3 text-gray-500">🔍</span>
          </div>

          {/* Trending Articles */}
          <Typography variant="h2" className="text-primary">
            Terkini
          </Typography>
          <div className="flex flex-col gap-4">
            {trendingArticles.map((trend, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b pb-2"
              >
                <Image
                  src={trend.image}
                  alt={trend.title}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <Typography variant="h3" className="text-primary text-sm">
                    {trend.title}
                  </Typography>
                  <Typography variant="body" className="text-gray-500 text-xs">
                    {trend.date}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
