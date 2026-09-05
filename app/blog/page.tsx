import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";
import { blogPost } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Blog",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Our Blog" title="Our Blog" />
      <section className="section insights-page">
        <div className="shell blog-list-heading"><span className="eyebrow">All Posts</span></div>
        <div className="shell insights-grid single-post-grid">
          <Link className="insight-card" href={`/blog/${blogPost.slug}`}>
            <div className="insight-image"><Image src={blogPost.image} alt="" fill sizes="(max-width: 860px) calc(100vw - 40px), 620px" /></div>
            <div className="insight-copy">
              <span>{blogPost.author} · {blogPost.published} · {blogPost.readTime}</span>
              <h2>{blogPost.title}</h2>
            </div>
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
