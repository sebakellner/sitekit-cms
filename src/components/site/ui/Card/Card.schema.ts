import { z } from 'zod'

export const CardSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageSrc: z.string().optional(),
  imageAlt: z.string().optional(),
  label: z.string().optional(),
  buttonLabel: z.string().optional(),
  buttonHref: z.string().optional(),
})

export type CardProps = z.infer<typeof CardSchema>
