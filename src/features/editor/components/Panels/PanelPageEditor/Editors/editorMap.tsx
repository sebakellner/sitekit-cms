import TextEditor from './TextEditor'
import ColorPickerEditor from './ColorPickerEditor'
import SelectEditor from './SelectEditor'
import JsonEditor from './JsonEditor'
import RichTextEditor from './RichTextEditor'
import type { ComponentPropEditor } from '@features/editor/types/editor.types'
import type { JSX } from 'react'

type EditorProps = {
  title: string
  value: any
  onChange: (val: any) => void
  options?: any
}

type EditorMap = {
  [K in ComponentPropEditor]?: (props: EditorProps) => JSX.Element
}

const ensureString = (val: any, fallback = ''): string =>
  typeof val === 'string' ? val : fallback

const stringEditor =
  (Component: (props: EditorProps) => JSX.Element, fallback = '') =>
  (props: EditorProps) => (
    <Component {...props} value={ensureString(props.value, fallback)} />
  )

const editorMap: EditorMap = {
  text: stringEditor(TextEditor),
  colorPicker: stringEditor(ColorPickerEditor, '#ffffff'),
  select: stringEditor(SelectEditor),
  richText: stringEditor(RichTextEditor),
  jsonEditor: (props) => (
    <JsonEditor
      {...props}
      value={Array.isArray(props.value) ? props.value : []}
    />
  ),
  toggle: undefined,
  numberInput: undefined,
  imageUploader: undefined,
  layout: undefined,
  spacing: undefined,
  typography: undefined,
  codeEditor: undefined,
  borders: undefined,
}

export default editorMap
