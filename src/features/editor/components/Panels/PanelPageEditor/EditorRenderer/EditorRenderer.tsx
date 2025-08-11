import type { ComponentPropConfig } from '@features/editor/types/editor.types'
import editorMap from '../Editors/editorMap'

type Props = {
  propConfig: ComponentPropConfig
  value: unknown
  onChange: (val: unknown) => void
}

const EditorRenderer = ({ propConfig, value, onChange }: Props) => {
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
