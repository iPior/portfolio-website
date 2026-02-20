import type { CollectionConfig } from 'payload'
import { triggerRevalidate } from '@/lib/revalidate'

export const Mix: CollectionConfig = {
  slug: 'mix',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => triggerRevalidate()],
    afterDelete: [() => triggerRevalidate()],
  },
  fields: [
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
      name: 'src',
      type: 'text',
      required: true,
    },
  ],
}
