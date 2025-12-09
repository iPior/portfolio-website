// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { resendAdapter } from '@payloadcms/email-resend'

import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Blog } from './collections/Blog'
import { Mix } from './collections/Mix'
import { Project } from './collections/Project'
import { Freelance } from './collections/Freelance'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Blog, Mix, Project, Freelance],
  editor: lexicalEditor({
    features({ defaultFeatures }) {
      return [
        ...defaultFeatures,
      ]
    },
    // features: [
    //   ParagraphFeature(),
    //   UnderlineFeature(),
    //   BoldFeature(),
    //   ItalicFeature(),
    //   LinkFeature({
    //     enabledCollections: ['blog'],
    //     fields: ({ defaultFields }) => {
    //       const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
    //         if ('name' in field && field.name === 'url') return false
    //         return true
    //       })

    //       return [
    //         ...defaultFieldsWithoutUrl,
    //         {
    //           name: 'url',
    //           type: 'text',
    //           admin: {
    //             condition: (_data, siblingData) => siblingData?.linkType !== 'internal',
    //           },
    //           label: ({ t }) => t('fields:enterURL'),
    //           required: true,
    //         },
    //       ]
    //     },
    //   }),
    // ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 5000,
      allowExitOnIdle: true,
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  email: resendAdapter({
    defaultFromAddress: 'send@piotrszaran.com',
    defaultFromName: 'DJ Pior',
    apiKey: process.env.RESEND_API_KEY || '',
  })
})
