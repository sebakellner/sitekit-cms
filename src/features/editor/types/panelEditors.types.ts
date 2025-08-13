import type { ComponentPropPrimitives } from './editor.types'

export interface PanelEditorBase {
  title: string
  value: ComponentPropPrimitives
  onChange: (val: unknown) => void
}
