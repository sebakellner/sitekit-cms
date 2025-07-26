import { z } from 'zod'

export const HeroSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  buttonLabel: z.string().optional(),
  background: z.union([z.string(), z.object({ color: z.string() })]).optional(),
  headingColor: z.string().optional(),
  textColor: z.string().optional(),
  buttonColor: z.string().optional(),
  buttonSize: z.enum(['small', 'medium', 'large']).optional(),
})

export type HeroProps = z.infer<typeof HeroSchema>
