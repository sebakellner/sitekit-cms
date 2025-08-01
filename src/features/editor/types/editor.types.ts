import type z from 'zod'
import type { ComponentPropEditorSchema } from '../schemas/componentPropEditor.schema'
import type { ComponentMetaSchema } from '../schemas/componentMeta.schema'
import type { ComponentPropPrimitivesSchema } from '../schemas/componentPropPrimitives'

export type ComponentPropPrimitives = z.infer<
  typeof ComponentPropPrimitivesSchema
>
export type ComponentPropEditor = z.infer<typeof ComponentPropEditorSchema>
export type ComponentPropConfig = z.infer<
  typeof ComponentMetaSchema
>['props'][string]
export type ComponentMeta = z.infer<typeof ComponentMetaSchema>
