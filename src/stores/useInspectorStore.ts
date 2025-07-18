import { create } from 'zustand'

export interface InspectorStore {
  selectedLabel: string | null
  setSelectedLabel: (label: string | null) => void
}

export const useInspectorStore = create<InspectorStore>((set) => ({
  selectedLabel: null,
  setSelectedLabel: (label) => set({ selectedLabel: label }),
}))
