import { z } from 'zod'

export const SectionSchema = z.object({
  id: z.string(),
  name: z.string().min(2).max(100),
  props: z.object().loose(),
})

export type Section = z.infer<typeof SectionSchema>
