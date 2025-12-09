import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"
import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { SectionHeader } from "@/components/headers/section-header"
import BlogCard from "@/components/cards/blog-card"
import { FadeRight } from "@/components/animations/fade-right"
import type { Metadata } from "next";

import type { Payload } from "payload"
import { getPayload } from 'payload'
import config from '@payload-config'
import { Blog } from "@/payload-types"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Blog Posts | Piotr Szaran - Web Developer & DJ",
  description: "Read my latest blog posts about web development, technology, DJing, and personal insights. Stay updated with tutorials, thoughts, and experiences from a Toronto-based developer and DJ.",
  keywords: ["blog", "web development", "programming", "technology", "DJ", "tutorials", "insights", "Piotr Szaran"],
  openGraph: {
    title: "Blog Posts | Piotr Szaran",
    description: "Read my latest blog posts about web development, technology, DJing, and personal insights.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog Posts | Piotr Szaran",
    description: "Read my latest blog posts about web development, technology, DJing, and personal insights.",
  },
  alternates: {
    canonical: "https://www.piotrszaran.com/blogs",
  },
};

export default async function BlogPage() {
  const payload = await getPayload({ config })

  const getPayloadPosts = async (payload:Payload) => {
    const posts = await payload.find({
      collection: 'blog',
      limit: 10,
      sort: '-date',
    })
    return posts.docs || null
  }

  const posts = await getPayloadPosts(payload)

  return (
    <main>
      <PatternWrapper>
        <div className="h-full px-4 mt-18">
          <FadeRight>
            <SectionHeader className="mb-4" header="Blog Posts" />
          </FadeRight>
          <BorderWrapper className="mt-2 md:mt-4">
            <div className="grid gap-4 p-4 h-full">
              {posts.map((post: Blog) => (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  description={post.description}
                  image={post.image}
                  readTime={post["read-time"] || null}
                />
                
              ))}
            </div>
          </BorderWrapper>
        </div>
      </PatternWrapper>
    </main>
  )
}
