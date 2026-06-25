import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { FadeIn } from "@/components/animations/FadeIn";

function formatDate(d: string) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function BlogCards() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section-pad bg-panel/70">
      <div className="container-xl">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">From the Blog</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ink font-extrabold tracking-tight">
                Guides for toy hauler owners
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-brand hover:gap-2.5 transition-all"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-card border border-line rounded-2xl overflow-hidden shadow-soft hover:-translate-y-1 hover:shadow-card-hover hover:border-brand/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/images/blog-default.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <span className="absolute top-3 left-3 inline-block bg-card/95 backdrop-blur-sm text-brand text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-ink text-lg leading-snug mb-2.5 group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed line-clamp-2 mb-4 flex-1">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted font-body">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}
                    </span>
                    {post.readTime && (
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
