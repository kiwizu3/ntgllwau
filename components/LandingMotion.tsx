"use client";

import { useEffect } from "react";

const SELECTORS = [
  ".section-heading",
  ".philosophy-media",
  ".philosophy-copy",
  ".review-shell",
  ".contact-band-grid",
];

export default function LandingMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".home-motion-page");
    if (!root) return;

    const body = document.body;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    body.classList.add("landing-motion-active");

    SELECTORS.forEach((selector) => {
      root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (!element.dataset.reveal) element.dataset.reveal = "rise";
      });
    });

    root.querySelectorAll<HTMLElement>(".practice-card-grid").forEach((element) => {
      element.dataset.reveal = "stagger";
    });

    if (reduceMotion) {
      root.classList.add("motion-reduced", "motion-ready");
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
      return () => {
        body.classList.remove("landing-motion-active", "landing-scrolled");
      };
    }

    root.classList.add("motion-enabled");
    const readyFrame = requestAnimationFrame(() => root.classList.add("motion-ready"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.classList.add("is-visible");
          revealObserver.unobserve(element);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => revealObserver.observe(element));

    const parallaxItems = Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));
    let scrollFrame = 0;

    const updateScrollMotion = () => {
      scrollFrame = 0;
      body.classList.toggle("landing-scrolled", window.scrollY > 28);

      if (window.innerWidth <= 860) {
        parallaxItems.forEach((item) => item.style.setProperty("--parallax-y", "0px"));
        return;
      }

      const viewportHeight = window.innerHeight;
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > viewportHeight + 100) return;

        const strength = Number(item.dataset.parallaxStrength || 28);
        const center = rect.top + rect.height / 2;
        const normalized = (center - viewportHeight / 2) / viewportHeight;
        const offset = Math.max(-strength, Math.min(strength, -normalized * strength));
        item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestScrollUpdate = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(updateScrollMotion);
    };

    updateScrollMotion();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate, { passive: true });

    const heroMedia = root.querySelector<HTMLElement>(".home-hero-media");
    let pointerFrame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (!heroMedia || event.pointerType === "touch" || window.innerWidth <= 980) return;
      const rect = heroMedia.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        heroMedia.style.setProperty("--hero-rotate-y", `${(x * 2.3).toFixed(2)}deg`);
        heroMedia.style.setProperty("--hero-rotate-x", `${(-y * 1.8).toFixed(2)}deg`);
        heroMedia.style.setProperty("--hero-shift-x", `${(x * 8).toFixed(2)}px`);
        heroMedia.style.setProperty("--hero-shift-y", `${(y * 7).toFixed(2)}px`);
      });
    };
    const resetPointer = () => {
      if (!heroMedia) return;
      heroMedia.style.setProperty("--hero-rotate-y", "0deg");
      heroMedia.style.setProperty("--hero-rotate-x", "0deg");
      heroMedia.style.setProperty("--hero-shift-x", "0px");
      heroMedia.style.setProperty("--hero-shift-y", "0px");
    };

    heroMedia?.addEventListener("pointermove", onPointerMove);
    heroMedia?.addEventListener("pointerleave", resetPointer);

    return () => {
      cancelAnimationFrame(readyFrame);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      heroMedia?.removeEventListener("pointermove", onPointerMove);
      heroMedia?.removeEventListener("pointerleave", resetPointer);
      body.classList.remove("landing-motion-active", "landing-scrolled");
    };
  }, []);

  return null;
}
