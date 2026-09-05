import Image from "next/image";
import Link from "next/link";
import ContactBand from "@/components/ContactBand";
import { practices, type RichBlock } from "@/lib/content";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function renderBody(blocks: RichBlock[]) {
  const output: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) return;
    const items = listItems;
    listItems = [];
    output.push(
      <ul className="service-rich-list" key={`list-${output.length}`}>
        {items.map((item) =>
          <li key={item}>
            <ArrowUpRightIcon
              className="service-rich-list-icon"
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        )}
      </ul>,
    );
  };

  blocks.forEach((block) => {
    if (block.type === "li") {
      listItems.push(block.text);
      return;
    }

    flushList();

    if (block.text === "Criminal Offences" || block.text === "More Information about our work in Construction Law") {
      output.push(<h2 key={block.text}>{block.text}</h2>);
      return;
    }

    if (block.text.startsWith("Traffic Offences\n")) {
      const [heading, ...rest] = block.text.split("\n");
      output.push(<h2 key={`${heading}-heading`}>{heading}</h2>);
      output.push(<p key={`${heading}-body`}>{rest.join("\n")}</p>);
      return;
    }

    output.push(<p key={`${block.text}-${output.length}`}>{block.text}</p>);
  });

  flushList();
  return output;
}

export default function PracticeDetailPage({ slug }: { slug: string }) {
  const practice = practices.find((item) => item.slug === slug);
  if (!practice) return null;

  return (
    <>
      <section className="service-hero">
        <div className="shell service-hero-grid">
          <div className="service-hero-copy">
            <div className="hero-kicker"><span className="status-dot" /> Services</div>
            <h1>{practice.title}</h1>
            <p>{practice.summary}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact-us">
                Contact Us

                <ArrowUpRightIcon
                  className="button-icon"
                  aria-hidden="true"
                />
              </Link>
              <a className="button button-ghost" href="tel:+61407000007">Call 0407 000 007</a>
            </div>
          </div>
          <div className="service-hero-media">
            <Image src={practice.image} alt="" fill priority sizes="(max-width: 860px) calc(100vw - 40px), 52vw" />
            <span>{practice.title}</span>
          </div>
        </div>
      </section>

      <section className="section service-body">
        <div className="shell service-body-grid">
          <aside className="service-aside">
            <span className="eyebrow">Services</span>
            <ul>
              {practices.map((item) => (
                <li key={item.slug} className={item.slug === practice.slug ? "active" : undefined}>
                  {item.slug === practice.slug ? item.title : <Link href={`/${item.slug}`}>{item.title}</Link>}
                </li>
              ))}
            </ul>
          </aside>
          <div className="prose service-prose">{renderBody(practice.body)}</div>
        </div>
      </section>

      <section className="next-practice">
        <div className="shell next-practice-inner">
          <span className="eyebrow light">Services</span>
          <div className="next-links">
            {practices.filter((item) => item.slug !== practice.slug).map((item) => (
              <Link key={item.slug} href={`/${item.slug}`}>
                <span>{item.title}</span>

                <ArrowUpRightIcon
                  className="next-link-icon"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
