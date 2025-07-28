import type { Section } from '@features/editor/schemas/section.schema'
import type { SectionStore } from './section.type'

export const getSections = (state: SectionStore): Section[] => state.sections

export const getSelectedSection = (
  state: SectionStore
): Section | undefined => {
  return state.sections.find((section) => section.id === state.selectedId)
}
