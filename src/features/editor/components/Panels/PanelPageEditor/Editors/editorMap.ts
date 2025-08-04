import TextEditor from './TextEditor'
import ColorPickerEditor from './ColorPickerEditor'
// import ToggleEditor from './ToggleEditor'
// import NumberEditor from './NumberEditor'
// import ImageUploaderEditor from './ImageUploaderEditor'
import SelectEditor from './SelectEditor'
import JsonEditor from './JsonEditor'
import RichTextEditor from './RichTextEditor'

// import LayoutEditor from './LayoutEditor'
// import SpacingEditor from './SpacingEditor'
// import TypographyEditor from './TypographyEditor'
// import CodeEditor from './CodeEditor'
// import BordersEditor from './BordersEditor'

export const editorMap = {
  text: TextEditor,
  colorPicker: ColorPickerEditor,
  toggle: undefined,
  numberInput: undefined,
  imageUploader: undefined,
  select: SelectEditor,
  jsonEditor: JsonEditor,
  layout: undefined,
  richText: RichTextEditor,
  spacing: undefined,
  typography: undefined,
  codeEditor: undefined,
  borders: undefined,
}
