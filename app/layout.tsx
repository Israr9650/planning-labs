import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.planninglabs.in"),
  title: {
    default: "Planning Labs | Experiential & Digital Marketing Agency",
    template: "%s | Planning Labs",
  },
  description:
    "Planning Labs is a premium experiential and digital marketing agency based in Mumbai. We specialize in live events, exhibition stalls, brand activations, performance marketing, SEO, and web development.",
  keywords: [
    "Experiential Marketing Agency Mumbai",
    "Digital Marketing Agency India",
    "Event Production",
    "Exhibition Stall Architecture",
    "Performance Marketing",
    "Brand Activations",
    "Next.js Web Development",
  ],
  authors: [{ name: "Planning Labs Strategy Team" }],
  openGraph: {
    title: "Planning Labs | Experiential & Digital Marketing Agency",
    description:
      "Ideas that move people. Bringing spatial events, physical activations, and digital performance campaigns together.",
    url: "https://www.planninglabs.in",
    siteName: "Planning Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planning Labs | Experiential & Digital Marketing Agency",
    description:
      "Planning Labs combines physical spatial experiences with digital acquisition campaigns.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f3ef] text-[#0a0a0a] font-sans selection:bg-[#e24a29] selection:text-white">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
