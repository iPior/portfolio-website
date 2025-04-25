// import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react"

import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"
import { BorderWrapper } from "@/components/wrappers/border-wrapper"

interface BlogArray {
    [key: string]: BlogPost
}

interface BlogPost {
    title: string;
    date: string;
    author?: string;
    readTime?: string;
    content: string;
    image?: string;
}

// This would typically come from a CMS or database
async function getBlogPost(slug: string) {
  // In a real app, fetch from your API or CMS
  const posts:BlogArray = {
    "my-first-post": {
      title: "Getting Started with Next.js",
      date: "2023-04-18",
      author: "Jane Doe",
      readTime: "5 min read",
      content: `
        <p>Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p>
        
        <p>You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.</p>
        
        <h2>Server Components</h2>
        
        <p>React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different rendering strategies:</p>
        
        <ul>
          <li><strong>Static Rendering:</strong> Routes are rendered at build time, or in the background after data revalidation.</li>
          <li><strong>Dynamic Rendering:</strong> Routes are rendered for each user at request time.</li>
          <li><strong>Streaming:</strong> Routes are rendered on the server and progressively streamed to the client.</li>
        </ul>
        
        <p>The Next.js router uses React's component hierarchy to enable nested routes and layouts. The App Router is built on React Server Components, which allows you to fetch data directly in Server Components.</p>
      `,
      image: "/placeholder.svg?height=600&width=1200",
    },
  }

  return posts[slug] || null
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
      <PatternWrapper className="">
          <article className="h-full container max-w-4xl mx-auto px-4 pt-12">
              <div className="space-y-3">
                  <div className="space-y-2">
                    <BorderWrapper className="py-4">
                        <h1 className="text-4xl font-bold sm:text-6xl">{post.title}</h1>
                    </BorderWrapper>
                    <div className="flex flex-wrap gap-4 text-sm text-center text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                              })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <UserIcon className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg border">
                        {/* <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority /> */}
                    </div>
                  </div>
                  <BorderWrapper className="py-4">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </BorderWrapper>
              </div>
          </article>
      </PatternWrapper>

  )
}
