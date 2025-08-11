import TextEditor from './TextEditor'
import ColorPickerEditor from './ColorPickerEditor'
import SelectEditor from './SelectEditor'
import RichTextEditor from './RichTextEditor'
import ListEditor from './ListEditor'
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
  select: (props) => <SelectEditor {...props} />,
  richText: stringEditor(RichTextEditor),
  listEditor: (props) => <ListEditor {...props} />,
  toggle: undefined,
  jsonEditor: undefined,
  numberInput: undefined,
  imageUploader: undefined,
  layout: undefined,
  spacing: undefined,
  typography: undefined,
  codeEditor: undefined,
  borders: undefined,
}

export default editorMap
