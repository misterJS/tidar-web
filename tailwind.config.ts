import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Putih
        foreground: "#171717", // Hitam (teks utama)
        primary: "#E30613", // Merah terang (CTA)
        accent: "#F4A900", // Kuning emas (highlight)
        secondary: "#4A4A4A", // Abu-abu gelap (teks sekunder)
        card: "#EAEAEA", // Abu-abu muda (background kartu)
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
