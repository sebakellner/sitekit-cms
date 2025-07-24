import type { ComponentMeta } from '@components/site/types'

export function extractDefaultProps(
  props: ComponentMeta['props'] | undefined
): Record<string, unknown> {
  if (!props) return {}
  return Object.fromEntries(
    Object.entries(props).map(([key, val]) => [
      key,
      (val as { default: unknown }).default,
    ])
  )
}
