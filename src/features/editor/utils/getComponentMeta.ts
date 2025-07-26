import { ComponentMetaSchema } from '@components/site/schemas/componentMeta.schema'

type ModuleWithDefault = { default: unknown }

export function getComponentMeta(module: unknown) {
  if (
    module &&
    typeof module === 'object' &&
    'default' in module &&
    (module as ModuleWithDefault).default &&
    typeof (module as ModuleWithDefault).default === 'object'
  ) {
    const def = (module as ModuleWithDefault).default
    const result = ComponentMetaSchema.safeParse(def)
    if (result.success) {
      return result.data
    }
  }
  return { name: '', props: {} }
}
