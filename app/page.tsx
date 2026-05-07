import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";
import {
  ShieldCheck,
  Wifi,
  Bell,
  Parking,
  AirConditioner,
  Tv,
  BatteryCharging,
  WashingMachine,
} from "iconoir-react";

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

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.8 9.5H4V20h2.8V9.5ZM5.4 4A1.7 1.7 0 1 0 5.4 7.4 1.7 1.7 0 0 0 5.4 4ZM20 14c0-3-1.6-4.7-4-4.7-1.7 0-2.6.9-3 1.6V9.5h-2.8V20H13v-5.6c0-1.5.8-2.5 2-2.5s2 .9 2 2.6V20h3v-6Z" />
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

const values = ["Comfort", "Hospitality", "Reliability", "Excellence"];

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
  { title: "Bedroom", image: "/images/bed.jpeg" },
  { title: "Bedroom Detail", image: "/images/bed_closeup.jpeg" },
  { title: "Living Area", image: "/images/couch.jpeg" },
  { title: "Seating Area", image: "/images/seating.jpeg" },
  { title: "Wardrobe", image: "/images/wardrobe.jpeg" },
  { title: "Exterior", image: "/images/outside_landscape.png" },
];

const testimonials = [
  "Clean, comfortable, and very secure. I felt at home throughout my stay.",
  "Excellent service and great location. Highly recommend Mswano Apartments!",
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
    label: "LinkedIn",
    handle: "Mswano Apartments",
    href: "https://www.linkedin.com",
    icon: <LinkedInIcon />,
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
          <h2 className="mt-8 max-w-2xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-6xl">
            Comfort meets convenience in Dar es Salaam.
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-mswano-secondary">
            Welcome to Mswano Apartments, a thoughtfully designed space where
            comfort meets convenience. Whether you&apos;re visiting for business
            or leisure, we assure a calm, secure, and stylish environment
            tailored to your needs.
          </p>
        </FadeIn>
        <FadeIn
          delay={0.12}
          direction="none"
          className="overflow-hidden rounded-xl bg-mswano-stone p-4 md:rounded-lg"
        >
          <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-lg p-8 text-white md:min-h-[520px]">
            <Image
              src="/images/outside_potrait.png"
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
            src="/images/seating2.jpg"
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
            <h2 className="mt-8 font-serif text-3xl leading-tight tracking-[-0.03em] text-mswano-primary md:text-5xl">
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
            <h2 className="mt-8 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-6xl">
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
                  We envision a preferred excellent, comfortable and trustworthy
                  choice of accommodation in Dar es Salaam.
                </p>
              </FadeIn>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {values.map((value, index) => (
                <FadeIn key={value} delay={index * 0.04}>
                  <div className="rounded-lg border border-black/10 px-6 py-4 text-center text-mswano-primary">
                    {value}
                  </div>
                </FadeIn>
              ))}
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
              <h2 className="mt-8 max-w-2xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] md:text-6xl">
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
                <h3 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-5xl">
                  Two-Bedroom Apartment
                </h3>
                <p className="mt-5 leading-7 text-mswano-secondary">
                  Experience comfort in our well-designed Two-Bedroom Apartment,
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
                    href="#booking"
                    className="rounded-lg bg-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary"
                  >
                    Check Availability
                  </a>
                  <a
                    href="#booking"
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
          <h2 className="mt-8 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-6xl">
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
        className="bg-white/50 px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-8 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-6xl">
              Take a glimpse into your next stay at Mswano Apartments.
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {galleryItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06} direction="none">
                <div className="relative flex min-h-72 items-end overflow-hidden rounded-lg p-6 text-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <span className="relative font-serif text-2xl md:text-3xl">
                    {item.title}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="location">
        <FadeIn fullWidth direction="none">
          <div className="relative flex min-h-[450px] items-end md:min-h-[600px]">
            <Image
              src="/images/maptop.jpg"
              alt="Mswano Apartments location map"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative w-full px-5 pb-12 md:px-10 md:pb-20">
              <div className="mx-auto max-w-7xl">
                <span className="inline-flex rounded-md border border-white/30 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/80">
                  Location
                </span>
                <h2 className="mt-6 max-w-2xl font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-white md:text-6xl">
                  Prime location in Kijitonyama.
                </h2>
                <p className="mt-6 font-medium leading-7 text-white">
                  Ajabu Ziada Street, House No. 23
                  <br />
                  Kijitonyama, Dar es Salaam
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-mswano-primary px-5 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-8 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] md:text-6xl">
              What Our Guests Say
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial} delay={index * 0.08}>
                <blockquote className="rounded-xl border border-white/10 bg-white/[0.04] p-8 font-serif text-2xl leading-tight text-white/90 md:text-3xl">
                  “{testimonial}”
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-32"
      >
        <FadeIn>
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="mt-8 font-serif text-4xl font-medium leading-tight tracking-[-0.035em] text-mswano-primary md:text-6xl">
            Get in Touch
          </h2>
          <div className="mt-8 space-y-3 leading-7 text-mswano-secondary">
            <p>
              <strong className="text-mswano-primary">Phone:</strong> +255 663
              603224
            </p>
            <p>
              <strong className="text-mswano-primary">Email:</strong>{" "}
              info@mswano.or.tz
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
            <p>
              <strong className="text-mswano-primary">Website:</strong>{" "}
              www.mswano.or.tz
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} direction="none">
          <form className="grid gap-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <input
              className="rounded-lg border border-black/10 bg-background px-6 py-4 outline-none focus:border-mswano-accent"
              placeholder="Full Name"
            />
            <input
              className="rounded-lg border border-black/10 bg-background px-6 py-4 outline-none focus:border-mswano-accent"
              placeholder="Email Address"
            />
            <input
              className="rounded-lg border border-black/10 bg-background px-6 py-4 outline-none focus:border-mswano-accent"
              placeholder="Phone Number"
            />
            <textarea
              className="min-h-36 rounded-lg border border-black/10 bg-background px-6 py-4 outline-none focus:border-mswano-accent"
              placeholder="Message"
            />
            <button className="rounded-lg bg-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary">
              Send Message
            </button>
          </form>
        </FadeIn>
      </section>

      <section id="booking" className="px-5 pb-10 md:px-10">
        <FadeIn direction="none">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:grid-cols-[1fr_0.8fr] md:p-14">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-mswano-accent">
                Booking
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] text-mswano-primary md:text-6xl">
                Book Your Stay with Ease
              </h2>
              <p className="mt-6 max-w-md leading-7 text-mswano-secondary">
                Reserve your apartment today and experience comfort like never
                before. Our team is ready to assist you with your booking.
              </p>
            </div>
            <form className="grid gap-4">
              <input
                type="date"
                className="rounded-lg border border-black/10 bg-background px-6 py-4 text-mswano-secondary outline-none focus:border-mswano-accent"
                aria-label="Check-in Date"
              />
              <input
                type="date"
                className="rounded-lg border border-black/10 bg-background px-6 py-4 text-mswano-secondary outline-none focus:border-mswano-accent"
                aria-label="Check-out Date"
              />
              <input
                className="rounded-lg border border-black/10 bg-background px-6 py-4 outline-none focus:border-mswano-accent"
                placeholder="Number of Guests"
              />
              <select
                className="rounded-lg border border-black/10 bg-background px-6 py-4 text-mswano-secondary outline-none focus:border-mswano-accent"
                defaultValue=""
              >
                <option value="" disabled>
                  Apartment Type
                </option>
                <option>Two-Bedroom Apartment</option>
              </select>
              <textarea
                className="min-h-28 rounded-lg border border-black/10 bg-background px-6 py-4 outline-none focus:border-mswano-accent"
                placeholder="Special Requests"
              />
              <button className="rounded-lg bg-mswano-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-mswano-accent hover:text-mswano-primary">
                Submit Booking Request
              </button>
            </form>
          </div>
        </FadeIn>
      </section>

      <footer className="px-5 py-10 text-sm text-mswano-secondary md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-black/10 pt-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="relative h-10 w-48">
              <Image
                src="/brand/mswano-logo.png"
                alt="Mswano Apartments"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-5 max-w-sm">Copyright © Mswano Apartments</p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-[0.18em] text-mswano-primary">
              Quick Links
            </h3>
            <div className="grid gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-mswano-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-[0.18em] text-mswano-primary">
              Contact Info
            </h3>
            <p>+255 663 603224</p>
            <p>info@mswano.or.tz</p>
            <p>Ajabu Ziada Street, House No. 23</p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-[0.18em] text-mswano-primary">
              Social Media
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={`${social.label}: ${social.handle}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-mswano-primary transition hover:border-mswano-accent hover:bg-mswano-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="#gallery"
              className="mt-3 inline-block hover:text-mswano-accent"
            >
              Gallery
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
