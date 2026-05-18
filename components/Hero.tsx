import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] overflow-hidden rounded-b-xl bg-mswano-primary text-white md:rounded-b-2xl">
      <div className="video-mask absolute inset-0 opacity-70">
        <iframe
          src="https://www.youtube.com/embed/sOjacAtUBqo?autoplay=1&mute=1&controls=0&loop=1&playlist=sOjacAtUBqo&playsinline=1&rel=0&modestbranding=1"
          title="Mswano Apartments video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(200,169,106,0.22),transparent_34%)]" />
      <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-28 md:px-10 md:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <FadeIn direction="up">
            <p className="mb-5 text-xs uppercase tracking-[0.32em] text-mswano-accent">Modern living, redefined</p>
            <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[0.96] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              A true home away from home
            </h1>
          </FadeIn>
          <FadeIn delay={0.18} direction="up" className="max-w-md md:justify-self-end">
            <p className="mb-7 text-base leading-7 text-white/78 md:text-lg">
              Experience comfort, privacy, and modern living at Mswano Apartments.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#booking" className="rounded-lg bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-mswano-primary transition hover:bg-mswano-accent">
                Book Your Stay
              </a>
              <a href="#contact" className="rounded-lg border border-white/45 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
