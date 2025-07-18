import { create } from 'zustand'

export type SelectedComponentProps = { [key: string]: unknown } | null

export interface InspectorStore {
  selectedComponentName: string | null
  selectedComponentProps: SelectedComponentProps
  setSelectedComponentName: (
    label: string | null,
    props?: SelectedComponentProps
  ) => void
}

export const useInspectorStore = create<InspectorStore>((set) => ({
  selectedComponentName: null,
  selectedComponentProps: null,
  setSelectedComponentName: (label, props) =>
    set({
      selectedComponentName: label,
      selectedComponentProps: props ?? null,
    }),
}))
