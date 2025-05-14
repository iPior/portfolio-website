import Image from "next/image"
import Link from "next/link";
import { notFound } from "next/navigation"
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeft } from "lucide-react"
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"
import { BorderWrapper } from "@/components/wrappers/border-wrapper"

import RichText from '@/components/sanity/rich-text'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

const queryPostBySlug = async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'blog',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return result.docs?.[0] || null
}


export default async function BlogPost({ params }: Args) {
  const { slug = '' } = await params
  const post = await queryPostBySlug({ slug })

  if (!post) {
    notFound()
  }


  return (
    <PatternWrapper className="">
        <article className="h-full container max-w-4xl mx-auto px-4 pt-12">
            <div className="space-y-3">
                <div className="space-y-2">
                  <BorderWrapper className="py-1 mb-2">
                      <h1 className="text-4xl font-bold sm:text-6xl">{post.title}</h1>
                  </BorderWrapper>
                  <BorderWrapper className="py-4">
                    <div className="flex flex-wrap gap-4 text-sm text-center text-muted-foreground mb-2 ">
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
                          <span>{post['read-time']}</span>
                        </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg border mb-8">
                        <Image 
                          src={post.image.url || "/placeholder.svg"} 
                          alt={post.image.alt || post.title} 
                          fill 
                          className="object-cover" 
                          priority 
                        />
                    </div>
                    <RichText data={post.content} enableGutter={false} />
                    {/* Return to Blogs Link */}
                    <div className="">
                      <Link
                        href="/blogs"
                        className="text-foreground/70 text-sm flex items-center mt-8 hover:text-accent"
                      >
                        <ArrowLeft className="h-4 w-4 mr-1" /><span className="font-bold">Return to Blogs </span>
                      </Link>
                    </div>
                  </BorderWrapper>
              </div>
            </div>
        </article>
    </PatternWrapper>
  )
}
