import { z } from 'zod'
import { CardSchema } from '../ui/Card'

export const CardGridSchema = z.object({
  title: z.string().min(2).max(100).optional(),
  background: z.string().default('light-2'),
  items: z.array(CardSchema).default([]),
})

export type CardGridProps = z.infer<typeof CardGridSchema>
