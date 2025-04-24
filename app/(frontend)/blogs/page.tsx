import Link from "next/link"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"

// This would typically come from a CMS or database
async function getBlogPosts() {
  // In a real app, fetch from your API or CMS
  const posts = [
    {
      slug: "my-first-post",
      title: "Getting Started with Next.js",
      date: "2023-04-18",
      excerpt:
        "Learn the basics of Next.js and how to build your first application with this powerful React framework.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "advanced-nextjs-techniques",
      title: "Advanced Next.js Techniques",
      date: "2023-04-25",
      excerpt: "Explore advanced techniques in Next.js including middleware, edge functions, and more.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      slug: "nextjs-deployment-strategies",
      title: "Next.js Deployment Strategies",
      date: "2023-05-02",
      excerpt: "Learn about different ways to deploy your Next.js application, from Vercel to self-hosting.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Wait a moment to simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 500))

  return posts
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-12">Blog</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group relative rounded-lg border p-6 hover:bg-muted/50">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative h-48 w-full sm:w-48 rounded-md overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight">
                    <Link href={`/blogs/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    Read more <span className="sr-only">about {post.title}</span>
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
        ))}
      </div>
    </div>
  )
}
