import FadeIn from "@/components/FadeIn";
import GalleryCarousel from "@/components/GalleryCarousel";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionLabel from "@/components/SectionLabel";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ShieldCheck,
  Wifi,
  Bell,
  Parking,
  AirConditioner,
  Tv,
  BatteryCharging,
  WashingMachine,
  User,
  Mail,
  Phone,
  MessageText,
  Calendar,
  Group,
  HomeSimple,
  Notes,
  Sofa,
  Heart,
  ShieldAlt,
  Star,
} from "iconoir-react";

const LocationMap = dynamic(() => import("@/components/LocationMap"), { ssr: false });

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17" cy="7" r="1.1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M14 8.2h2.1V5H13.5c-2.6 0-4 1.6-4 4.2V11H7v3.2h2.5V21H13v-6.8h2.7L16.1 11H13V9.4c0-.8.3-1.2 1-1.2Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.6 8.4a5.6 5.6 0 0 1-3.4-1.1v5.1a5.2 5.2 0 1 1-4.5-5.2v2.9a2.4 2.4 0 1 0 1.7 2.3V3h2.8a5.6 5.6 0 0 0 3.4 4.6v.8Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
    <path d="M12.04 3a8.86 8.86 0 0 0-7.56 13.5L3.5 21l4.6-.96A8.86 8.86 0 1 0 12.04 3Zm0 1.7a7.16 7.16 0 0 1 0 14.32 7.1 7.1 0 0 1-3.62-.98l-.35-.21-2.2.46.47-2.13-.23-.36A7.16 7.16 0 0 1 12.04 4.7Zm-3.1 3.66c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.31.98 2.48c.12.16 1.66 2.65 4.12 3.6 2.04.8 2.46.64 2.9.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.48Z" />
  </svg>
);

const highlights = [
  "Fully furnished modern apartments",
  "Two-bedroom apartments",
  "Prime location in Kijitonyama",
  "24/7 security and support",
  "High-speed Wi-Fi",
  "Housekeeping services",
];

const values = [
  { label: "Comfort", icon: Sofa, desc: "Spaces designed to feel like home" },
  { label: "Hospitality", icon: Heart, desc: "Warm, attentive care for every guest" },
  { label: "Reliability", icon: ShieldAlt, desc: "Consistent quality you can count on" },
  { label: "Excellence", icon: Star, desc: "Raising the standard in every detail" },
];

const apartmentFeatures = [
  "Master bedroom, private and comfortable",
  "Additional guest public bathroom",
  "Fully equipped modern kitchen",
  "Spacious sitting room with TV access and Netflix included",
  "Dedicated dining area",
  "Fully furnished and stylish interior",
  "Ideal for families or group stays",
  "High-speed Wi-Fi for seamless connectivity",
  "Comfortable and homely atmosphere",
  "Secure and peaceful environment",
];

const amenities = [
  { label: "24/7 Security", icon: ShieldCheck },
  { label: "High-speed Internet", icon: Wifi },
  { label: "Housekeeping Services", icon: Bell },
  { label: "Parking Space", icon: Parking },
  { label: "Air Conditioning", icon: AirConditioner },
  { label: "DSTV connection", icon: Tv },
  { label: "Backup Power Supply", icon: BatteryCharging },
  { label: "Laundry Services optional", icon: WashingMachine },
];

const galleryItems = [
  "/images/outside_potrait.jpeg",
  "/images/WhatsApp Image 2026-04-30 at 9.01.04 PM.jpeg",
  "/images/WhatsApp Image 2026-05-12 at 3.32.46 PM (1).jpeg",
  "/images/WhatsApp Image 2026-05-12 at 3.32.16 PM.jpeg",
  "/images/WhatsApp Image 2026-05-12 at 3.32.46 PM.jpeg",
  "/images/wideimg.jpg",
  "/images/couch.jpeg",
  "/images/couch.jpg",
  "/images/seating.jpeg",
  "/images/seating_close.jpeg",
  "/images/seating_close.jpg",
  "/images/bed.jpeg",
  "/images/bed2.jpg",
  "/images/bed_lowangle.jpeg",
  "/images/bed_closeup.jpeg",
  "/images/bed_side.jpg",
  "/images/wardrobe.jpeg",
  "/images/detail.jpg",
];

const testimonials = [
  {
    quote: "Clean, comfortable, and very secure. I felt at home throughout my stay. The staff were incredibly attentive and the apartment was spotless.",
    name: "Amina S.",
    role: "Business Traveller",
    initials: "AS",
  },
  {
    quote: "Excellent service and a great location. I highly recommend Mswano Apartments to anyone visiting Dar es Salaam — truly a home away from home.",
    name: "David M.",
    role: "Family Stay",
    initials: "DM",
  },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Apartments", href: "#apartments" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    handle: "mswano_apartment",
    href: "https://www.instagram.com/mswano_apartment",
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    handle: "mswano_apartment",
    href: "https://www.facebook.com/mswano_apartment",
    icon: <FacebookIcon />,
  },
  {
    label: "TikTok",
    handle: "mswano_apartment",
    href: "https://www.tiktok.com/@mswano_apartment",
    icon: <TikTokIcon />,
  },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen font-sans">
      <Navbar />
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-32">
        <FadeIn>
          <SectionLabel>Welcome</SectionLabel>
          <h2 className="mt-8 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-4xl">
            Comfort meets convenience in Dar es Salaam.
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-mswano-secondary">
            Welcome to Mswano Apartments, a thoughtfully designed space where
            comfort meets convenience. Whether you&apos;re visiting for business
            or leisure, we assure a calm, secure, and stylish environment
            tailored to your needs.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.label} delay={0.1 + i * 0.07} direction="up">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mswano-accent/10">
                      <Icon className="h-4 w-4 text-mswano-accent" />
                    </span>
                    <span className="font-medium text-mswano-primary">{v.label}</span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
        <FadeIn
          delay={0.12}
          direction="none"
          className="overflow-hidden rounded-xl bg-mswano-stone p-4 md:rounded-lg"
        >
          <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-lg p-8 text-white md:min-h-[520px]">
            <Image
              src="/images/outside_potrait.jpeg"
              alt="Mswano Apartments exterior"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                Modern Living, Redefined
              </p>
              <p className="mt-4 max-w-sm font-serif text-3xl leading-tight md:text-4xl">
                Calm, secure, stylish, and made to feel like home.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <FadeIn fullWidth direction="none">
        <div className="relative h-[350px] w-full md:h-[550px]">
          <Image
            src="/images/wideimg.jpg"
            alt="Mswano Apartments seating area"
            fill
            className="object-cover object-center"
          />
        </div>
      </FadeIn>

      <section className="border-y border-black/10 bg-white/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <FadeIn>
            <SectionLabel>Highlights</SectionLabel>
            <h2 className="mt-8 font-serif text-2xl leading-tight tracking-[-0.03em] text-mswano-primary md:text-3xl">
              Everything you need for a smooth stay.
            </h2>
          </FadeIn>
          <div className="divide-y divide-black/10">
            {highlights.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05} direction="left">
                <div className="grid grid-cols-[70px_1fr] py-6 text-mswano-primary">
                  <span className="text-sm text-mswano-secondary">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl">{item}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <FadeIn>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-8 font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-4xl">
              Who We Are
            </h2>
          </FadeIn>
          <div className="grid gap-8 text-mswano-secondary">
            <FadeIn delay={0.08}>
              <p className="text-xl leading-8">
                Mswano Apartments is a premium residential accommodation located
                in the heart of Kijitonyama, Dar es Salaam. We provide fully
                serviced apartments designed for both short-term and long-term
                stays.
              </p>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              <FadeIn
                delay={0.12}
                className="rounded-xl bg-white p-8 ring-1 ring-black/5"
              >
                <h3 className="font-serif text-2xl text-mswano-primary">
                  Our Mission
                </h3>
                <p className="mt-4 leading-7">
                  To provide a comfortable, secure, and homely living experience
                  through quality service and modern amenities.
                </p>
              </FadeIn>
              <FadeIn
                delay={0.18}
                className="rounded-xl bg-white p-8 ring-1 ring-black/5"
              >
                <h3 className="font-serif text-2xl text-mswano-primary">
                  Our Vision
                </h3>
                <p className="mt-4 leading-7">
                  We envision a preferred excellent, reliable and trustworthy
                  choice of accommodation in Dar es Salaam.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section
        id="apartments"
        className="bg-mswano-primary px-5 py-24 text-white md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <FadeIn>
              <SectionLabel>Our Apartments</SectionLabel>
              <h2 className="mt-8 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-[-0.035em] md:text-4xl">
                Discover our well-furnished two-bedroom apartments.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="max-w-sm text-white/70">
              Designed to meet your lifestyle needs for families, groups,
              business guests, short stays, and long stays.
            </FadeIn>
          </div>
          <FadeIn direction="none">
            <article className="grid overflow-hidden rounded-xl bg-white text-mswano-primary md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[420px]">
                <Image
                  src="/images/bed_lowangle.jpeg"
                  alt="Two-bedroom apartment bedroom"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="font-serif text-3xl leading-tight tracking-[-0.035em] md:text-4xl">
                  Two-bedroom apartment
                </h3>
                <p className="mt-5 leading-7 text-mswano-secondary">
                  Experience comfort in our well-designed two-bedroom apartment,
                  featuring modern amenities and a comfortable, homely
                  atmosphere.
                </p>
                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {apartmentFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-lg bg-background px-5 py-4 text-sm text-mswano-secondary"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/booking"
                    className="rounded-lg bg-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary"
                  >
                    Check Availability
                  </a>
                  <a
                    href="/booking"
                    className="rounded-lg border border-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-mswano-primary transition hover:bg-mswano-primary hover:text-white"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <FadeIn fullWidth direction="none">
        <div className="relative h-[350px] w-full md:h-[550px]">
          <Image
            src="/images/bed2.jpg"
            alt="Mswano Apartments bedroom"
            fill
            className="object-cover object-center"
          />
        </div>
      </FadeIn>

      <section
        id="amenities"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <FadeIn>
          <SectionLabel>Amenities & Services</SectionLabel>
          <h2 className="mt-8 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-4xl">
            What We Offer
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
            <FadeIn key={amenity.label} delay={index * 0.05} direction="up">
              <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5">
                <Icon className="h-7 w-7 text-mswano-secondary" />
                <span className="text-base font-medium text-mswano-primary md:text-lg">{amenity.label}</span>
              </div>
            </FadeIn>
          );
          })}
        </div>
      </section>

      <section
        id="gallery"
        className="overflow-hidden bg-white/50 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-8 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-4xl">
              Take a glimpse into your next stay at Mswano Apartments.
            </h2>
          </FadeIn>
        </div>
        <div className="mt-14">
          <GalleryCarousel images={galleryItems} />
        </div>
      </section>

      <section id="location">
        <FadeIn fullWidth direction="none">
          <div className="relative h-[450px] md:h-[580px]">
            <LocationMap />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 w-full px-5 pb-12 md:px-10 md:pb-20">
              <div className="mx-auto max-w-7xl">
                <span className="inline-flex rounded-md border border-white/30 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/80">
                  Location
                </span>
                <h2 className="mt-5 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-white md:text-4xl">
                  Prime location in Kijitonyama.
                </h2>
                <p className="mt-3 font-medium leading-7 text-white/85">
                  Ajabu Ziada Street, House No. 23 &mdash; Kijitonyama, Dar es Salaam
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-32"
      >
        <FadeIn>
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="mt-8 font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-4xl">
            Get in Touch
          </h2>
          <div className="mt-8 space-y-3 leading-7 text-mswano-secondary">
            <p>
              <strong className="text-mswano-primary">Phone:</strong> +255 799 608181
            </p>
            <p>
              <strong className="text-mswano-primary">Email:</strong>{" "}
              reservations@mswanoaparments.com
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={`${social.label}: ${social.handle}`}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-black/10 text-mswano-primary transition hover:border-mswano-accent hover:bg-mswano-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} direction="none">
          <ContactForm />
        </FadeIn>
      </section>

      <section id="booking" className="px-5 pb-10 md:px-10">
        <FadeIn direction="none">
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 md:grid-cols-[1fr_0.8fr] md:p-5">
            <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-lg p-8 text-white md:min-h-full md:p-10">
              <Image
                src="/images/seating_3.jpg"
                alt="Mswano Apartments living area"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.28em] text-mswano-accent">
                  Booking
                </p>
                <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] text-white md:text-4xl">
                  Book Your Stay with Ease
                </h2>
                <p className="mt-6 max-w-md leading-7 text-white/85">
                  Reserve your apartment today and experience comfort like never
                  before. Our team is ready to assist you with your booking.
                </p>
              </div>
            </div>
            <form className="grid gap-4 p-4 md:p-8">
              <label className="grid gap-2 text-sm font-medium text-mswano-primary">
                Check-in Date
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                  <input type="date" className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 text-mswano-secondary outline-none focus:border-mswano-accent" aria-label="Check-in Date" />
                </div>
              </label>
              <label className="grid gap-2 text-sm font-medium text-mswano-primary">
                Check-out Date
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                  <input type="date" className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 text-mswano-secondary outline-none focus:border-mswano-accent" aria-label="Check-out Date" />
                </div>
              </label>
              <div className="relative">
                <Group className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                <input className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent" placeholder="Number of Guests" />
              </div>
              <div className="relative">
                <HomeSimple className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mswano-secondary" />
                <select className="w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 text-mswano-secondary outline-none focus:border-mswano-accent" defaultValue="">
                  <option value="" disabled>Apartment Type</option>
                  <option>Two-bedroom apartment</option>
                </select>
              </div>
              <div className="relative">
                <Notes className="absolute left-4 top-5 h-4 w-4 text-mswano-secondary" />
                <textarea className="min-h-28 w-full rounded-lg border border-black/10 bg-background py-4 pl-11 pr-6 outline-none focus:border-mswano-accent" placeholder="Special Requests" />
              </div>
              <button className="rounded-lg bg-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary">
                Submit Booking Request
              </button>
            </form>
          </div>
        </FadeIn>
      </section>

      <SiteFooter />
      <a
        href="https://wa.me/255799608181"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Mswano Apartments on WhatsApp"
        className="whatsapp-float fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/25 ring-4 ring-white/70 transition hover:scale-105 md:bottom-8 md:right-8"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}
