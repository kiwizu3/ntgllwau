export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div className="hero-kicker">{eyebrow}</div>
        <div className="page-hero-copy">
          <h1>{title}</h1>
          {intro ? <p>{intro}</p> : null}
        </div>
      </div>
    </section>
  );
}
