import { redirect } from "next/navigation";
import { practices } from "@/lib/content";

export default async function LegacyPracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practices.find((item) => item.slug === slug);
  redirect(practice ? `/${practice.slug}` : "/services");
}
