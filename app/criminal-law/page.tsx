import type { Metadata } from "next";
import PracticeDetailPage from "@/components/PracticeDetailPage";
import { practices } from "@/lib/content";

const practice = practices.find((item) => item.slug === "criminal-law")!;

export const metadata: Metadata = {
  title: practice.title,
  description: practice.summary,
  alternates: { canonical: "/criminal-law" },
};

export default function Page() {
  return <PracticeDetailPage slug="criminal-law" />;
}
