import Link from "next/link";
import { contact } from "@/lib/content";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid">
        <div className="contact-band-heading">
          <span className="eyebrow light">NIGHTINGALE LAWYERS</span>
          <h2>Contact Us</h2>
        </div>
        <div className="contact-band-copy">
          <p>{contact.appointment}</p>
          <div className="contact-inline">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
          </div>
          <Link className="button button-light" href="/contact-us">
            Contact Us

            <ArrowUpRightIcon
              className="button-icon"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
