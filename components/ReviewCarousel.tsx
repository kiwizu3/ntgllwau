"use client";

import { useState } from "react";
import { reviews } from "@/lib/content";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const review = reviews[index];

  const move = (delta: number) => {
    setDirection(delta > 0 ? "next" : "prev");
    setIndex((current) => (current + delta + reviews.length) % reviews.length);
  };

  return (
    <div className="review-shell" aria-roledescription="carousel" aria-label="Client reviews">
      <div className="review-quote-mark" aria-hidden="true">“</div>
      <div key={index} className={`review-slide review-slide-${direction}`}>
        <blockquote aria-live="polite">{review.quote}</blockquote>
        <div className="review-meta">
          <div><strong>{review.name}</strong></div>
          <div className="review-controls">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => move(-1)}
            >
              <ArrowLeftIcon
                className="review-arrow-icon"
                aria-hidden="true"
              />
            </button>
            <span aria-label={`Review ${index + 1} of ${reviews.length}`}>{String(index + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => move(1)}
            >
              <ArrowRightIcon
                className="review-arrow-icon"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
