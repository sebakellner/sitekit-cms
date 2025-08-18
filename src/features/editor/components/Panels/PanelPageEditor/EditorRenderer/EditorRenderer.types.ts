import type { ComponentPropConfig } from '@features/editor/types/editor.types'

export type EditorRendererProps = {
  config: ComponentPropConfig
  value: unknown
  onChange: (val: unknown) => void
}
