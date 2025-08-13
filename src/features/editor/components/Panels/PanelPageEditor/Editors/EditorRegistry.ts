import type { JSX } from 'react'

import TextEditor from './TextEditor'
import ColorPickerEditor from './ColorPickerEditor'
import SelectEditor, { type SelectEditorProps } from './SelectEditor'
import ListEditor, { type ListEditorProps } from './ListEditor'
import type { PanelEditorBase } from '@features/editor/types/panelEditors.types'

const EditorRegistry = {
  text: TextEditor as (props: PanelEditorBase) => JSX.Element,
  colorPicker: ColorPickerEditor as (props: PanelEditorBase) => JSX.Element,
  select: SelectEditor as (props: SelectEditorProps) => JSX.Element,
  listEditor: ListEditor as (props: ListEditorProps) => JSX.Element,
}

export default EditorRegistry
