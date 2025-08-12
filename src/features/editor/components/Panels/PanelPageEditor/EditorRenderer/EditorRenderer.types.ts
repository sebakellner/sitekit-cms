import type { ComponentPropConfig } from '@features/editor/types/editor.types'

export type EditorRendererProps = {
  propConfig: ComponentPropConfig
  value: unknown
  onChange: (val: unknown) => void
}
