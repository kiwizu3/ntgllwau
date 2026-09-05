import Link from "next/link";
import BrandMark from "./BrandMark";
import { contact, homeContent, practices } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <BrandMark />
          <p>{homeContent.motto}</p>
        </div>
        <div>
          <span className="footer-label">Services</span>
          {practices.map((practice) => (
            <Link key={practice.slug} href={`/${practice.slug}`}>{practice.title}</Link>
          ))}
        </div>
        <div>
          <span className="footer-label">Nightingale Lawyers</span>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Our Blog</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div>
          <span className="footer-label">Contact Us</span>
          <span>{contact.appointment}</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`mailto:${contact.teamEmail}`}>{contact.teamEmail}</a>
          <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
        </div>
      </div>
    </footer>
  );
}
