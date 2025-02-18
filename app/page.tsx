import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import Activity from "@/components/templates/Activity";
import Article from "@/components/templates/Article";
import Hero from "@/components/templates/Hero";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="flex flex-col gap-8 items-center text-center">
        <Activity />
        <Article />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
