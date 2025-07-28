import { v4 as uuidv4 } from 'uuid'
import { componentsRegistry } from '@src/registry/componentRegistry'
import { getComponentMeta } from '../utils/getComponentMeta'
import { extractDefaultProps } from '../utils/extractDefaultProps'
import { SectionSchema } from '../schemas/section.schema'

export const createSectionFromRegistry = async (name: string) => {
  const loader = componentsRegistry[name as keyof typeof componentsRegistry]
  if (!loader) return
  const metaModule = await loader()
  const meta = getComponentMeta(metaModule)
  const props = extractDefaultProps(meta.data?.props)
  const newSection = {
    id: uuidv4(),
    name,
    props,
  }
  const result = SectionSchema.safeParse(newSection)
  if (!result.success) {
    console.warn('Section validation failed:', result.error)
    return
  }
  return result.data
}
