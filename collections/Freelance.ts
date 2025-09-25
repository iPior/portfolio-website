import type { CollectionConfig } from 'payload'

export const Freelance: CollectionConfig = {
  slug: 'freelance',
  access: {
    read: () => true,
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
  ],
}
