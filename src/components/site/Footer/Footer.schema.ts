import { z } from 'zod'

export const FooterLinkColumnSchema = z.object({
  title: z.string(),
  links: z.array(z.string()),
})

export const FooterSchema = z.object({
  siteName: z.string().optional(),
  year: z.number().optional(),
  footerLinks: z.array(FooterLinkColumnSchema).optional(),
  background: z.string().optional(),
})

export type FooterLinkColumnProps = z.infer<typeof FooterLinkColumnSchema>
export type FooterProps = z.infer<typeof FooterSchema>
