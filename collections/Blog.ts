import type { CollectionConfig } from 'payload'
import { triggerRevalidate } from '@/lib/revalidate'

export const Blog: CollectionConfig = {
  slug: 'blog',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const slug = doc.slug as string
        await triggerRevalidate(['/', '/blogs', ...(slug ? [`/blogs/${slug}`] : [])])
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        const slug = doc?.slug as string | undefined
        await triggerRevalidate(['/', '/blogs', ...(slug ? [`/blogs/${slug}`] : [])])
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: false,
    },
    {
      name: 'read-time',
      type: 'text',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
