import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
import { homeContent } from "@/lib/content";
import BrandMark from "./BrandMark";

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="shell home-hero-grid">
        <div className="home-hero-copy">
          <h1 id="home-hero-title">
            Nightingale
            <span>Lawyers</span>
          </h1>

          <p className="home-motto">{homeContent.motto}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="tel:+61407000007">
              Call 0407 000 007 <i aria-hidden="true">↗</i>
            </a>
            <Link className="button button-ghost" href="/services">
              Services
            </Link>
          </div>
        </div>

        <div className="home-hero-media" data-parallax data-parallax-strength="18">
          <div className="hero-image-wrap">
            <Image
              src={assets.hero}
              alt="Nightingale Lawyers"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 980px) calc(100vw - 40px), (max-width: 1320px) 50vw, 650px"
              className="hero-image"
            />
            <div className="hero-image-shade" aria-hidden="true" />
            {/* <div className="hero-media-caption">
              <strong>{homeContent.philosophyHeading}</strong>
            </div> */}
          </div>

          <div className="hero-floating-card">
            <div className="hero-floating-card-content">
              <strong>{homeContent.motto}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
