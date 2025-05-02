"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from "lucide-react"
import { Media } from "@/payload-types";

interface BlogCardProps {
    key: number | string;
    slug: string;
    title: string;
    date: string;
    description: string;
    image: Media | string | number | null; // for Payload media
    readTime: string | null;
    className?: string;
}

export default function BlogCard({key, slug, title, date, description, image, readTime, className}: BlogCardProps){

  return (
    <article key={slug} className={cn("group relative rounded-lg border p-6 hover:bg-muted/50 shadow-sm", className) }>
        <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative h-48 w-full sm:w-48 rounded-md overflow-hidden border">
            <Image
                src={image && typeof image === "object" && "url" in image ? image.url ?? "/placeholder-image.jpg" : "/placeholder-image.jpg"}
                alt={image && typeof image === "object" && "alt" in image ? image.alt || "Blog post image" : "Blog post image"}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <div className="flex-1 space-y-4">
            <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
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
            <p className="text-muted-foreground">
                {description}
            </p>
            <div>
            <Link
                href={`/blogs/${slug}`}
                className="inline-flex items-center text-sm font-medium text-primary"
            >
                Read more <span className="sr-only">about {title}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 h-4 w-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
            </div>
        </div>
        </div>
    </article>
  )
}