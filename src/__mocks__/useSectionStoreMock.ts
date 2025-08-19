import type { SectionStore } from '@features/editor/store/section/section.type'
import { vi } from 'vitest'

export const mockSelectSection = vi.fn()
export const mockSetSections = vi.fn()
export const mockUpdateSectionProps = vi.fn()
export const mockAddSection = vi.fn()
export const mockDeleteSection = vi.fn()

const defaultState: SectionStore = {
  sections: [],
  selectedId: null,
  setSections: mockSetSections,
  updateSectionProps: mockUpdateSectionProps,
  selectSection: mockSelectSection,
  addSection: mockAddSection,
  deleteSection: mockDeleteSection,
}

export const useSectionStore = (selector?: (state: SectionStore) => unknown) =>
  selector ? selector(defaultState) : defaultState
