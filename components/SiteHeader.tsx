"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const practicePaths = ["/criminal-law", "/construction-law", "/family-law", "/conveyancing", "/commercial-law"];

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Our Blog", "/blog"],
  ["Contact Us", "/contact-us"],
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname === "/services" || practicePaths.some((path) => pathname === path);
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link href="/" className="brand-link" aria-label="Nightingale Lawyers home">
          <BrandMark />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => {
            const active = isActive(pathname, href);
            return (
              <Link key={href} href={href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <a className="phone-link" href="tel:+61407000007">0407 000 007</a>
          <Link className="button button-small button-primary" href="/contact-us">
            Contact Us <i aria-hidden="true">↗</i>
          </Link>
          <button
            className={`menu-button ${open ? "is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} aria-current={isActive(pathname, href) ? "page" : undefined}>{label}</Link>
        ))}
        <a href="tel:+61407000007">Call 0407 000 007</a>
      </nav>
    </header>
  );
}
