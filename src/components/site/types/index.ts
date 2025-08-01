export type ComponentPropType =
  | 'string'
  | 'boolean'
  | 'number'
  | 'color'
  | 'image'
  | 'function'
  | 'enum'
  | 'object'
  | ComponentPropType[]

export type ComponentPropEditor =
  | 'text'
  | 'colorPicker'
  | 'toggle'
  | 'numberInput'
  | 'imageUploader'
  | 'select'
  | 'layout'
  | 'richText'
  | 'spacing'
  | 'typography'
  | 'codeEditor'
  | 'borders'
  | 'jsonEditor'

export type ComponentPanel = {
  id: string
  title: string
  fields: string[]
}

export type ComponentMeta<P = Record<string, unknown>> = {
  name: string
  description?: string
  category?: string
  preview?: string
  component: React.FC<P>
  panels?: ComponentPanel[]
  props: {
    [key: string]: {
      title?: string
      type: ComponentPropType
      default: string | boolean | number | undefined | null | Array<unknown>
      options?: string[]
      editor: ComponentPropEditor
    }
  }
}
