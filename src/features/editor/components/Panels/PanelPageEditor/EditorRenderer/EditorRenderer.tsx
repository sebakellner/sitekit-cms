import TextEditor from '../Editors/TextEditor'
import SelectEditor from '../Editors/SelectEditor'
import ColorPickerEditor from '../Editors/ColorPickerEditor'
import ListEditor from '../Editors/ListEditor'
import type { EditorRendererProps } from './EditorRenderer.types'

const EditorRenderer = ({ config, value, onChange }: EditorRendererProps) => {
  const { editor, options, default: defaultValue } = config
  const title = config.title ?? 'Property'
  const safeValue = value ?? defaultValue

  const asString = (val: unknown) => (typeof val === 'string' ? val : '')
  const asArray = (val: unknown) => (Array.isArray(val) ? val : [])

  switch (editor) {
    case 'text':
      return (
        <TextEditor
          title={title}
          value={asString(safeValue)}
          onChange={onChange}
        />
      )
    case 'select':
      return (
        <SelectEditor
          title={title}
          value={asString(safeValue)}
          onChange={onChange}
          options={options ?? []}
        />
      )
    case 'colorPicker':
      return (
        <ColorPickerEditor
          title={title}
          value={asString(safeValue)}
          onChange={onChange}
        />
      )
    case 'listEditor':
      return (
        <ListEditor
          title={title}
          value={asArray(safeValue)}
          onChange={onChange}
        />
      )
    default:
      return null
  }
}

export default EditorRenderer
