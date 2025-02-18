"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import { motion } from "framer-motion";
import Typography from "@/components/atoms/Typography";
import Link from "next/link";

const articles = [
  {
    title: "Peran Pemuda dalam Pembangunan Bangsa",
    slug: "peran-pemuda",
    description:
      "Bagaimana pemuda dapat berkontribusi dalam membangun masa depan Indonesia.",
    date: "10 Februari 2025",
    category: "Pendidikan",
  },
  {
    title: "Pentingnya Pendidikan Politik bagi Generasi Muda",
    slug: "peran-pemuda",
    description:
      "Memahami dasar-dasar politik untuk menciptakan pemimpin yang berkualitas.",
    date: "5 Februari 2025",
    category: "Politik",
  },
  {
    title: "Gerakan Sosial dan Pengaruhnya terhadap Masyarakat",
    slug: "peran-pemuda",
    description: "Peran aktif komunitas dalam membantu masyarakat sekitar.",
    date: "1 Februari 2025",
    category: "Sosial",
  },
];

export default function Artikel() {
  const [isRendered, setIsRendered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || article.category === selectedCategory)
  );

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col md:flex-row gap-16 items-start text-center py-20 px-6 max-w-6xl mx-auto">
        <aside className="w-full md:w-1/4 flex flex-col gap-6 text-left">
          <Typography variant="h2" className="text-primary">
            Filter
          </Typography>
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
          >
            <option value="">Semua Kategori</option>
            <option value="Pendidikan">Pendidikan</option>
            <option value="Politik">Politik</option>
            <option value="Sosial">Sosial</option>
          </select>
          <Typography variant="h2" className="text-primary">
            Artikel Populer
          </Typography>
          <ul className="text-left">
            {articles.slice(0, 3).map((article, index) => (
              <li key={index} className="hover:text-accent cursor-pointer">
                {article.title}
                <Typography variant="body" className="text-gray-600 mb-2">
                  {article.date}
                </Typography>
              </li>
            ))}
          </ul>
        </aside>

        <div className="w-full md:w-3/4 flex flex-col gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <Link
                key={index}
                href={`/media/artikel/${article.slug}`}
                className="block px-4 py-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isRendered ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="bg-white shadow-lg rounded-xl p-6 text-left"
                >
                  <Typography variant="h2" className="text-primary">
                    {article.title}
                  </Typography>
                  <Typography variant="body" className="text-gray-600 mb-2">
                    {article.date} | {article.category}
                  </Typography>
                  <Typography variant="body" className="text-gray-700">
                    {article.description}
                  </Typography>
                </motion.div>
              </Link>
            ))
          ) : (
            <Typography variant="body" className="text-gray-500">
              Tidak ada artikel yang ditemukan.
            </Typography>
          )}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
