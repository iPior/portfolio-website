import type { CollectionConfig } from 'payload'
import { triggerRevalidate } from '@/lib/revalidate'

export const Freelance: CollectionConfig = {
  slug: 'freelance',
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
      name: 'liveUrl',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
  ],
}
