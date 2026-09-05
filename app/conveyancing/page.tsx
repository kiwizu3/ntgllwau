import type { Metadata } from "next";
import PracticeDetailPage from "@/components/PracticeDetailPage";
import { practices } from "@/lib/content";

const practice = practices.find((item) => item.slug === "conveyancing")!;

export const metadata: Metadata = {
  title: practice.title,
  description: practice.summary,
  alternates: { canonical: "/conveyancing" },
};

export default function Page() {
  return <PracticeDetailPage slug="conveyancing" />;
}
