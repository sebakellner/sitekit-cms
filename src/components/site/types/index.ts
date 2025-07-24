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
  | 'jsonEditor'

export type ComponentMeta = {
  name: string
  description?: string
  category?: string
  preview?: string
  component: React.FC<Record<string, unknown>>
  props: {
    [key: string]: {
      type: ComponentPropType
      default: string | boolean | number | undefined | null | Array<unknown>
      options?: string[]
      editor: ComponentPropEditor
    }
  }
}
