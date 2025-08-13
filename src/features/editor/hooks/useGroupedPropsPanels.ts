import { useMemo } from 'react'
import type {
  ComponentMeta,
  ComponentPropConfig,
} from '@features/editor/types/editor.types'
import type { Section } from '@features/editor/schemas/section.schema'

export interface GroupedPanelProp {
  key: string
  value: unknown
  config: ComponentPropConfig
}

export interface GroupedPanel {
  name: string
  props: GroupedPanelProp[]
}

export function useGroupedPropsPanels(
  meta: ComponentMeta | undefined,
  props: Section
): GroupedPanel[] {
  return useMemo(() => {
    if (!meta) return []

    return (
      meta.panels?.map((panel) => ({
        name: panel.title,
        props: panel.fields.map((key) => ({
          key,
          value: props.props[key],
          config: meta.props[key],
        })),
      })) ?? []
    )
  }, [meta, props])
}
