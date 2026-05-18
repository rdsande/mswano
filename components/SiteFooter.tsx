import Image from "next/image";
import { Sofa, Heart, ShieldAlt, Star } from "iconoir-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17" cy="7" r="1.1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M14 8.2h2.1V5H13.5c-2.6 0-4 1.6-4 4.2V11H7v3.2h2.5V21H13v-6.8h2.7L16.1 11H13V9.4c0-.8.3-1.2 1-1.2Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M19.6 8.4a5.6 5.6 0 0 1-3.4-1.1v5.1a5.2 5.2 0 1 1-4.5-5.2v2.9a2.4 2.4 0 1 0 1.7 2.3V3h2.8a5.6 5.6 0 0 0 3.4 4.6v.8Z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", handle: "mswano_apartment", href: "https://www.instagram.com/mswano_apartment", icon: <InstagramIcon /> },
  { label: "Facebook", handle: "mswano_apartment", href: "https://www.facebook.com/mswano_apartment", icon: <FacebookIcon /> },
  { label: "TikTok", handle: "mswano_apartment", href: "https://www.tiktok.com/@mswano_apartment", icon: <TikTokIcon /> },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Apartments", href: "/#apartments" },
  { label: "Contact", href: "/#contact" },
];

const values = [
  { label: "Comfort", icon: Sofa },
  { label: "Hospitality", icon: Heart },
  { label: "Reliability", icon: ShieldAlt },
  { label: "Excellence", icon: Star },
];

export default function SiteFooter() {
  return (
    <footer className="bg-mswano-primary px-5 pt-16 pb-8 text-sm text-white/50 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="relative h-10 w-44">
              <Image
                src="/brand/mswano-logo.png"
                alt="Mswano Apartments"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="mt-5 max-w-xs leading-7">
              Premium serviced apartments in the heart of Kijitonyama, Dar es Salaam. Comfort, security, and style — all in one place.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={`${social.label}: ${social.handle}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition hover:border-mswano-accent hover:text-mswano-accent"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">Navigate</h3>
            <div className="grid gap-3">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-mswano-accent">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
            <div className="grid gap-3">
              <p>+255 799 608181</p>
              <p>reservations@mswanoaparments.com</p>
              <p>Ajabu Ziada Street, No. 23<br />Kijitonyama, Dar es Salaam</p>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">Our Values</h3>
            <div className="grid gap-3">
              {values.map((v) => (
                <span key={v.label} className="text-white/50">{v.label}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p>© {new Date().getFullYear()} Mswano Apartments. All rights reserved.</p>
          <p className="text-xs uppercase tracking-widest text-white/25">Kijitonyama · Dar es Salaam · Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
