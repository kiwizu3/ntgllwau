import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactBand from "@/components/ContactBand";
import { blogPost } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: blogPost.title },
  description: blogPost.metaDescription,
  alternates: { canonical: `/blog/${blogPost.slug}` },
};

export default function BlogPostPage() {
  return (
    <>
      <article className="blog-article">
        <header className="shell blog-article-header">
          <Link className="eyebrow blog-back-link" href="/blog">All Posts</Link>
          <h1>{blogPost.title}</h1>
          <div className="blog-meta">
            <span>{blogPost.author}</span>
            <span>{blogPost.published}</span>
            <span>{blogPost.readTime}</span>
          </div>
          <p className="blog-updated">{blogPost.updated}</p>
        </header>

        <div className="shell blog-feature-image">
          <Image src={blogPost.image} alt="" fill priority sizes="(max-width: 900px) calc(100vw - 40px), 1180px" />
          <span>{blogPost.caption}</span>
        </div>

        <div className="shell blog-article-body prose">
          {blogPost.body.map((paragraph) =>
            paragraph.endsWith(":")
              ? <h2 key={paragraph}>{paragraph}</h2>
              : <p key={paragraph}>{paragraph}</p>
          )}
        </div>
      </article>
      <ContactBand />
    </>
  );
}
