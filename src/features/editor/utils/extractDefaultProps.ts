import type { ComponentMeta } from '@components/site/types'

function isDefaultProp(val: unknown): val is { default: unknown } {
  return typeof val === 'object' && val !== null && 'default' in val
}

export function extractDefaultProps(
  props: ComponentMeta['props'] | undefined,
  fallback: unknown = undefined
): Record<string, unknown> {
  if (!props) return {}
  return Object.fromEntries(
    Object.entries(props).map(([key, val]) => [
      key,
      isDefaultProp(val) ? val.default : fallback,
    ])
  )
}
