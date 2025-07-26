import { z } from 'zod'
import type { ComponentPropType } from '../types'

export const ComponentPropTypeSchema: z.ZodType<ComponentPropType> = z.union([
  z.literal('string'),
  z.literal('boolean'),
  z.literal('number'),
  z.literal('color'),
  z.literal('image'),
  z.literal('function'),
  z.literal('enum'),
  z.literal('object'),
  z.lazy(() => z.array(ComponentPropTypeSchema)),
])

export const ComponentPropEditorSchema = z.union([
  z.literal('text'),
  z.literal('colorPicker'),
  z.literal('toggle'),
  z.literal('numberInput'),
  z.literal('imageUploader'),
  z.literal('select'),
  z.literal('jsonEditor'),
])

export const ComponentMetaSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  preview: z.string().optional(),
  component: z.any(),
  props: z.record(
    z.string(),
    z.object({
      type: ComponentPropTypeSchema,
      default: z.any(),
      options: z.array(z.string()).optional(),
      editor: ComponentPropEditorSchema,
    })
  ),
})

export type ComponentMeta = z.infer<typeof ComponentMetaSchema>
