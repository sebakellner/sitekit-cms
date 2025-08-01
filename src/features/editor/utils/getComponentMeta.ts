import { ComponentMetaSchema } from '../schemas/componentMeta.schema'

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
    return {
      success: result.success,
      data: result.success ? result.data : null,
      error: result.success ? null : result.error,
    }
  }
  return {
    success: false,
    data: null,
    error: new Error(
      'Invalid module format: Module must have a default export with valid component metadata'
    ),
  }
}
