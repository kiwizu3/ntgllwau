import type { Metadata } from "next";
import PracticeDetailPage from "@/components/PracticeDetailPage";
import { practices } from "@/lib/content";

const practice = practices.find((item) => item.slug === "family-law")!;

export const metadata: Metadata = {
  title: practice.title,
  description: practice.summary,
  alternates: { canonical: "/family-law" },
};

export default function Page() {
  return <PracticeDetailPage slug="family-law" />;
}
