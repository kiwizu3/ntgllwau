import Image from "next/image";
import Link from "next/link";
import { practices } from "@/lib/content";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function PracticeGrid({ order }: { order?: readonly string[] }) {
  const items = order
    ? order.map((slug) => practices.find((practice) => practice.slug === slug)).filter(Boolean)
    : practices;

  return (
    <div className="practice-card-grid">
      {items.map((practice, index) => {
        if (!practice) return null;
        return (
          <Link className="practice-card" key={practice.slug} href={`/${practice.slug}`}>
            <div className="practice-card-media">
              <Image
                src={practice.image}
                alt=""
                fill
                sizes={index < 2 ? "(max-width: 620px) calc(100vw - 28px), (max-width: 1100px) 50vw, 650px" : "(max-width: 620px) calc(100vw - 28px), (max-width: 1100px) 50vw, 430px"}
              />
            </div>
            <div className="practice-card-body">
              <h3>{practice.title}</h3>
              <p>{practice.summary}</p>
              <div className="practice-card-link">
                <span>Read More</span>

                <ArrowUpRightIcon
                  className="practice-card-icon"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
