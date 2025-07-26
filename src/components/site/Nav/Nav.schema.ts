import { z } from 'zod'

export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
})

export const NavSchema = z.object({
  items: z.array(NavItemSchema).optional(),
  background: z.string().optional(),
  buttonLabel: z.string().optional(),
})

export type NavItem = z.infer<typeof NavItemSchema>
export type NavProps = z.infer<typeof NavSchema>
