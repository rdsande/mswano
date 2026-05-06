"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, Xmark } from "iconoir-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Apartments", href: "#apartments" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = !isScrolled;
  const logoSrc = isTransparent ? "/brand/mswano-logo-light.png" : "/brand/mswano-logo.png";

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full border-b px-5 py-5 text-[11px] uppercase tracking-[0.24em] transition-all duration-300 md:px-10 ${isTransparent ? "border-white/15 bg-transparent text-white" : "border-black/10 bg-background/90 text-mswano-primary backdrop-blur-xl"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="relative h-10 w-44 md:h-12 md:w-56">
          <Image
            src={logoSrc}
            alt="Mswano Apartments"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="transition hover:text-mswano-accent">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <a href="tel:+255663603224" className="transition hover:text-mswano-accent">
            +255 663 603224
          </a>
          <Link href="#booking" className="rounded-lg border border-current px-5 py-3 transition hover:border-mswano-accent hover:bg-mswano-accent hover:text-mswano-primary">
            Book
          </Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" aria-label="Toggle menu">
          {isMenuOpen ? <Xmark className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 -z-10 flex flex-col items-center justify-center gap-8 bg-mswano-primary text-white md:hidden">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="font-serif text-3xl normal-case tracking-wide">
                {link.name}
              </Link>
            ))}
            <Link href="#booking" onClick={() => setIsMenuOpen(false)} className="rounded-lg bg-mswano-accent px-7 py-4 text-xs uppercase tracking-[0.24em] text-mswano-primary">
              Book Your Stay
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
