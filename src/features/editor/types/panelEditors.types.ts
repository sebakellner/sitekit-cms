export interface PanelEditorBase<T> {
  title: string
  value: T
  onChange: (val: T) => void
}
