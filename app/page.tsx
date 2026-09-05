import Image from "next/image";
import Link from "next/link";

import HomeHero from "@/components/HomeHero";
import PracticeGrid from "@/components/PracticeGrid";
import ReviewCarousel from "@/components/ReviewCarousel";
import ContactForm from "@/components/ContactForm";
import LandingMotion from "@/components/LandingMotion";
import { assets } from "@/lib/assets";
import { homeContent } from "@/lib/content";

export default function Home() {
  return (
    <div className="home-motion-page">
      <LandingMotion />
      <HomeHero />

      <section className="section practice-home">
        <div className="shell section-heading">
          <span className="eyebrow">NIGHTINGALE LAWYERS</span>
          <h2>{homeContent.practiceHeading}</h2>
        </div>
        <div className="shell">
          <PracticeGrid />
          <p className="practice-review-prompt">{homeContent.reviewPrompt}</p>
        </div>
      </section>

      <section className="section philosophy-home">
        <div className="shell philosophy-grid">
          <div className="philosophy-media" data-parallax data-parallax-strength="34">
            <Image src={assets.philosophy} alt="Nightingale Lawyers" fill sizes="(max-width: 860px) calc(100vw - 40px), 50vw" />
          </div>

          <div className="philosophy-copy">
            <span className="eyebrow">{homeContent.philosophyHeading}</span>
            <h2>{homeContent.motto}</h2>
            {homeContent.philosophy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Link className="button button-ghost" href="/about">READ MORE <i>↗</i></Link>
          </div>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="shell section-heading">
          <span className="eyebrow">NIGHTINGALE LAWYERS</span>
          <h2>{homeContent.reviewsHeading}</h2>
        </div>
        <div className="shell">
          <ReviewCarousel />
          <a className="text-link reviews-more-link" href="https://www.google.com/search?q=nighting+gale+LAWAYERS&rlz=1C1ONGR_en-GBAU990AU990&oq=nighting+gale+LAWAYERS&aqs=chrome..69i57j46i13i175i199i512j69i64j0i13i30l2j0i5i13i30l3.4882j0j4&sourceid=chrome&ie=UTF-8#lrd=0x6b1319a5fbbd09df:0x6e7b75403d609f40,1,,,," target="_blank" rel="noreferrer">More Reviews</a>
        </div>
      </section>

      <section className="contact-band home-contact-section">
        <div className="shell home-contact-grid contact-band-grid">
          <div className="home-contact-copy">
            <span className="eyebrow light">NIGHTINGALE LAWYERS</span>
            <h2>{homeContent.contactHeading}</h2>
            <p>{homeContent.appointment}</p>
            <p className="home-direct-contact">{homeContent.directContact}</p>
          </div>
          <div className="contact-form-wrap home-contact-form-wrap">
            <h3>{homeContent.generalInquiryHeading}</h3>
            <ContactForm includeSubject buttonLabel="Submit" />
          </div>
        </div>
      </section>
    </div>
  );
}
