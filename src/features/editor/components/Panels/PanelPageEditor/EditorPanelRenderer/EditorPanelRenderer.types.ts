import type { ComponentMeta } from '@features/editor/types/editor.types'

export type EditorPanelRendererProps = {
  meta: ComponentMeta
  values: Record<string, unknown>
  onChange: (key: string, value: unknown) => void
}
