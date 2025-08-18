import type { GroupedPanel } from '@features/editor/hooks/useGroupedPropsPanels'

export type EditorPanelRendererProps = {
  groupedPanels: GroupedPanel[]
  onChange: (key: string, value: unknown) => void
}
