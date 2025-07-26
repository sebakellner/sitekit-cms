import { z } from 'zod'

export const SectionSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2).max(100),
  props: z.unknown().default({}),
})

export type Section = z.infer<typeof SectionSchema>
