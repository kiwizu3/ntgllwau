import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact, contactPage } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Nightingale Lawyers | Wollongong Lawyer" },
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-page-grid">
        <div className="contact-intro">
          <span className="eyebrow">{contactPage.title}</span>
          <h1>{contactPage.title}</h1>
          {contactPage.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          <h2 className="contact-chat-heading">{contactPage.chatHeading}</h2>
          <div className="contact-details">
            <div>
              <span>{contactPage.phoneLabel}</span>
              <a href={`tel:${contact.phoneHref}`}>{contactPage.phone}</a>
            </div>
            <div>
              <span>{contactPage.emailsLabel}</span>
              <a href={`mailto:${contactPage.email}`}>{contactPage.email}</a>
              <a href={`mailto:${contactPage.teamEmail}`}>{contactPage.teamEmail}</a>
            </div>
            <div>
              <span>{contactPage.socialLabel}</span>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap"><ContactForm /></div>
      </div>
    </section>
  );
}
