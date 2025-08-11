import { ComponentMetaSchema } from '@components/site/schemas/componentMeta.schema'
import type { ComponentMeta } from '@components/site/types'

function isDefaultProp(val: unknown): val is { default: unknown } {
  return typeof val === 'object' && val !== null && 'default' in val
}

export function extractDefaultProps(
  props: ComponentMeta['props'] | undefined,
  fallback: unknown = undefined
): Record<string, unknown> {
  if (!props) return {}
  const result = ComponentMetaSchema.shape.props.safeParse(props)
  if (!result.success) {
    console.error('Invalid props schema:', result.error)
    return {}
  }
  const validProps = result.data
  return Object.fromEntries(
    Object.entries(validProps).map(([key, val]) => [
      key,
      isDefaultProp(val) ? val.default : fallback,
    ])
  )
}
