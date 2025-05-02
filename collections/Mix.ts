import type { CollectionConfig } from 'payload'

export const Mix: CollectionConfig = {
  slug: 'mix',
  access: {
    read: () => true,
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
