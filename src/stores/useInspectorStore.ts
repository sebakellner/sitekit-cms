import { create } from 'zustand'

export type SelectedComponentProps = { [key: string]: unknown } | null

export interface InspectorStore {
  inspectedComponentName: string | null
  selectedProps: SelectedComponentProps
  setInspectedComponentName: (
    label: string | null,
    props?: SelectedComponentProps
  ) => void
}

export const useInspectorStore = create<InspectorStore>((set) => ({
  inspectedComponentName: null,
  selectedProps: null,
  setInspectedComponentName: (label, props) =>
    set({ inspectedComponentName: label, selectedProps: props ?? null }),
}))
