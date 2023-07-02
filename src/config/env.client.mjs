import { z } from 'zod'

export const envSchema = z.object({
  NEXT_PUBLIC_VERCEL_ENV: z
    .union([
      z.literal('production'),
      z.literal('preview'),
      z.literal('development'),
    ])
    .optional(),
  NEXT_PUBLIC_GHOST_API_URL: z.string(),
  NEXT_PUBLIC_GHOST_API_KEY: z.string(),
  GITHUB_DOCS_URL: z.string(),
})

export const clientEnv = envSchema.parse({
  NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
  NEXT_PUBLIC_GHOST_API_URL: process.env.NEXT_PUBLIC_GHOST_API_URL,
  NEXT_PUBLIC_GHOST_API_KEY: process.env.NEXT_PUBLIC_GHOST_API_KEY,
  GITHUB_DOCS_URL: 'https://github.com/status-im/status-website/tree/main/docs',
})
