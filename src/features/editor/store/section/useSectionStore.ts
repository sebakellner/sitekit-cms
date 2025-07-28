import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import mockSections from '@features/editor/mocks/mockSections'
import {
  setSections,
  selectSection,
  updateSectionProps,
  addSection,
} from './section.actions'
import type { SectionStore } from './section.type'

export const useSectionStore = create(
  persist<SectionStore>(
    (set) => ({
      sections: mockSections,
      selectedId: null,
      setSections: setSections(set),
      selectSection: selectSection(set),
      updateSectionProps: updateSectionProps(set),
      addSection: addSection(set),
    }),
    {
      name: 'section-store',
    }
  )
)
