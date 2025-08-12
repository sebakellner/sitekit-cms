import editorMap from '../Editors/editorMap'
import type { EditorRendererProps } from './EditorRenderer.types'

const EditorRenderer = ({
  propConfig,
  value,
  onChange,
}: EditorRendererProps) => {
  const title = propConfig.title ?? 'Property'
  const { editor, options, default: defaultValue } = propConfig

  const EditorComponent = editorMap[editor]

  if (!EditorComponent) return null

  return (
    <EditorComponent
      title={title}
      value={value ?? defaultValue}
      onChange={onChange}
      options={options ?? []}
    />
  )
}

export default EditorRenderer
