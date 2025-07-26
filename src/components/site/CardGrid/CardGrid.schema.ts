import { z } from 'zod'
import { CardSchema } from '../ui/Card'

export const CardGridSchema = z.object({
  id: z.uuid(),
  title: z.string().min(2).max(100),
  background: z.string().default('light-2'),
  description: z.string().max(500).optional(),
  image: z.url().optional(),
  items: z.array(CardSchema).default([]),
})

export type CardGridProps = z.infer<typeof CardGridSchema>
