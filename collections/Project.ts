import type { CollectionConfig } from 'payload'
import { triggerRevalidate } from '@/lib/revalidate'

export const Project: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => triggerRevalidate()],
    afterDelete: [() => triggerRevalidate()],
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'technologies',
      type: 'textarea',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'liveDemo',
      type: 'text',
    },
    {
      name: 'sourceCode',
      type: 'text',
      required: true,
    },
  ],
}
