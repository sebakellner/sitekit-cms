import { create } from 'zustand'

export type SelectedComponentProps = { [key: string]: unknown } | null

export interface InspectorStore {
  selectedComponentId: string | null
  selectedComponentName: string | null
  selectedComponentProps: SelectedComponentProps
  setSelectedComponent: (
    id: string | null,
    name: string | null,
    props?: SelectedComponentProps
  ) => void
}

export const useInspectorStore = create<InspectorStore>((set) => ({
  selectedComponentId: null,
  selectedComponentName: null,
  selectedComponentProps: null,
  setSelectedComponent: (id, name, props) =>
    set({
      selectedComponentId: id,
      selectedComponentName: name,
      selectedComponentProps: props ?? null,
    }),
}))
