"use client"

import { FadeUp } from "@/components/animations/fade-up"

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, ArrowRight } from "lucide-react"; // Import the Lucide icon
import { Media } from "@/payload-types";

interface BlogCardProps {
    slug: string;
    title: string;
    date: string;
    description: string;
    image: Media | string | number | null; // for Payload media
    readTime: string | null;
    className?: string;
}

export default function BlogCard({ slug, title, date, description, image, readTime, className }: BlogCardProps) {
  return (
    <FadeUp>
      <article key={slug} className={cn("group bg-card relative rounded-lg border p-6 hover:bg-muted/90 shadow-sm", className)}>
        <div className="flex flex-col gap-4 sm:flex-row @container">
          <div className="relative h-48 sm:h-76 md:h-60 lg:h-48 w-full sm:w-48 rounded-md overflow-hidden border">
            <Image
              src={image && typeof image === "object" && "url" in image ? image.url ?? '/fallback-image.jpg' : '/fallback-image.jpg'}
              alt={image && typeof image === "object" && "alt" in image ? image.alt || "Blog post image" : "Blog post image"}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300 group-hover:translate-x-6">
                <Link href={`/blogs/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h2>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mr-4">
                  <CalendarIcon className="h-4 w-4" />
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  <p>{readTime}</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">{description}</p>
            <div>
              <Link
                href={`/blogs/${slug}`}
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                Read more <span className="sr-only">about {title}</span>
                <ArrowRight className="ml-1 h-4 w-4" /> {/* Replaced SVG with Lucide ArrowRight */}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </FadeUp>
  );
}