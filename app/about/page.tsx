import type { Metadata } from "next";
import Image from "next/image";
import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import { assets } from "@/lib/assets";
import { aboutContent, homeContent, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title={aboutContent.title} />

      <section className="section editorial-section">
        <div className="shell editorial-grid">
          <div className="editorial-media">
            <Image src={assets.philosophy} alt="Nightingale Lawyers" fill sizes="(max-width: 860px) calc(100vw - 40px), 45vw" />
            <span>{homeContent.motto}</span>
          </div>
          <div className="prose about-prose">
            <span className="eyebrow">{aboutContent.title}</span>
            {aboutContent.philosophy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="shell section-heading team-heading">
          <span className="eyebrow">NIGHTINGALE LAWYERS</span>
          <h2>{aboutContent.teamHeading}</h2>
          <p>{aboutContent.teamIntro}</p>
        </div>
        <div className="shell team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name} id={member.name === "Hanna Ayoub" ? "hanna-ayoub" : undefined}>
              <div className="team-portrait"><Image src={member.image} alt="" fill sizes="(max-width: 620px) calc(100vw - 28px), (max-width: 860px) 38vw, 50vw" /></div>
              <div className="team-info">
                <span>{member.role}</span>
                <h3>{member.name}</h3>
                {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
