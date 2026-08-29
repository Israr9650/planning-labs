import Link from "next/link";
import FadeIn from "./FadeIn";

export default function ContactCTA() {
  return (
    <section className="bg-[#0a0a0a] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 text-white border-b border-neutral-800">
      <div className="mx-auto max-w-7xl">
        <FadeIn duration={0.6}>
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
            Start a Conversation
          </p>

          <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight text-white font-display">
              Have a project
              <br />
              <span className="italic font-serif font-normal text-neutral-300">in mind?</span>
            </h2>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#0a0a0a] transition-all duration-300 hover:bg-[#e24a29] hover:text-white shadow-xl"
            >
              <span>Send Us a Brief</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
