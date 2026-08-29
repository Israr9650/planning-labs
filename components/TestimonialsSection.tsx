export default function TestimonialsSection() {
  return (
    <section className="bg-[#f6f4f0] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#e24a29]">
              Partnership Ethos
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0d0d0d] font-display">
              Collaborative delivery.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              We partner with brand teams, marketing directors, and event leads as an extension of their internal creative department.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0d0d0d] text-white p-8 sm:p-12 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-[#e24a29]/10 rounded-full blur-3xl" />
              <span className="font-serif text-5xl text-[#e24a29] leading-none block">“</span>
              <p className="text-xl sm:text-2xl font-medium leading-snug tracking-tight text-neutral-200 font-serif italic">
                True brand alignment requires absolute transparency during both spatial fabrication and digital campaign deployment. We focus on reliable execution, honest timelines, and measurable output.
              </p>
              <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                <span className="text-[#e24a29] font-bold">PLANNING LABS AGENCY COMMITMENT</span>
                <span>MUMBAI, INDIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
