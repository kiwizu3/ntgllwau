import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PracticeGrid from "@/components/PracticeGrid";
import ContactBand from "@/components/ContactBand";
import { servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={servicesPage.title}
        intro={servicesPage.intro}
      />
      <section className="section practice-page-list">
        <div className="shell"><PracticeGrid order={servicesPage.order} /></div>
      </section>
      <ContactBand />
    </>
  );
}
