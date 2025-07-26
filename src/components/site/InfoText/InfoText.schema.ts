import { z } from 'zod'

export const FormatItemSchema = z.object({
  label: z.string(),
  description: z.string(),
})

export const InfoTextSchema = z.object({
  title: z.string().optional(),
  text: z.string().optional(),
  formats: z.array(FormatItemSchema).optional(),
  imageSrc: z.string().optional(),
  imageAlt: z.string().optional(),
  background: z.string().optional(),
})

export type FormatItem = z.infer<typeof FormatItemSchema>
export type InfoTextProps = z.infer<typeof InfoTextSchema>
