import type { Section } from '@src/types'
import { v4 as uuidv4 } from 'uuid'
import { SELECTOR_PREFIX } from '@constants/DnD'

export function insertSectionAtUtil(
  sections: Section[],
  setSections: (sections: Section[]) => void,
  id: string,
  index: number
) {
  const sectionId = String(id).startsWith(SELECTOR_PREFIX)
    ? String(id).replace(SELECTOR_PREFIX, '')
    : id
  const uniqueId = `${sectionId}-${uuidv4()}`
  const newSection = {
    id: uniqueId,
    name: sectionId,
    props: {},
  }
  const newSections = [...sections]
  newSections.splice(index, 0, newSection)
  setSections(newSections)
}
