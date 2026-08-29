import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f6f4f0] flex flex-col justify-between">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-32 sm:py-40 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-white/5 px-4 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#e24a29]">
          <span>404 ERROR · MISSING ROUTE</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white font-display">
          Page not found.
        </h1>

        <p className="max-w-md mx-auto text-xs sm:text-sm text-neutral-400 leading-relaxed">
          The route or document you are attempting to access has been relocated or does not exist.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#e24a29] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#0d0d0d] shadow-lg"
          >
            <span>Back to Agency Homepage</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
