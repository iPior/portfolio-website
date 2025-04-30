import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Blog Post Not Found</h2>
      <p className="mt-4 text-muted-foreground">Sorry, we couldn&apos;t find the blog post you&apos;re looking for.</p>
      <Link
        href="/blogs"
        className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Back to Blog
      </Link>
    </div>
  )
}
