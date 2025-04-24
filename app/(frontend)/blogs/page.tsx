import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"
import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { SectionHeader } from "@/components/headers/section-header"
import BlogCard from "@/components/cards/blog-card"

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
      readTime: "5 min read",
    },
    {
      slug: "advanced-nextjs-techniques",
      title: "Advanced Next.js Techniques",
      date: "2023-04-25",
      excerpt: "Explore advanced techniques in Next.js including middleware, edge functions, and more.",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "5 min read",
    },
    {
      slug: "nextjs-deployment-strategies",
      title: "Next.js Deployment Strategies",
      date: "2023-05-02",
      excerpt: "Learn about different ways to deploy your Next.js application, from Vercel to self-hosting.",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "5 min read",
    },
  ]

  // Wait a moment to simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 500))

  return posts
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="">
      <PatternWrapper>
        <div className="h-full px-4 mt-18">
          <SectionHeader className="mb-4" header="Blog Posts" />
          <BorderWrapper className="mt-2 md:mt-4">
            <div className="grid gap-8 p-4">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  image={post.image}
                  readTime={post.readTime}
                />
                
              ))}
            </div>
          </BorderWrapper>
        </div>
      </PatternWrapper>
    </main>
  )
}
