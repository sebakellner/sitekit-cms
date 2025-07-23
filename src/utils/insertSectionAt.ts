import type { Section } from '@src/types'

export function insertSectionAtUtil(
  sections: Section[],
  setSections: (sections: Section[]) => void,
  id: string,
  index: number
) {
  const sectionId = String(id).startsWith('selector-')
    ? String(id).replace('selector-', '')
    : id
  const uniqueId = `${sectionId}-${Date.now()}`
  const newSection = {
    id: uniqueId,
    name: sectionId,
    props: {},
  }
  const newSections = [...sections]
  newSections.splice(index, 0, newSection)
  setSections(newSections)
}
