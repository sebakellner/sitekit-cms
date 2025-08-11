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
  z.literal('layout'),
  z.literal('richText'),
  z.literal('spacing'),
  z.literal('typography'),
  z.literal('codeEditor'),
  z.literal('borders'),
])

export const ComponentPanelSchema = z.object({
  id: z.string(),
  title: z.string(),
  fields: z.array(z.string()),
})

export const ComponentMetaSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  preview: z.string().optional(),
  component: z
    .custom<React.FC<Record<string, unknown>>>()
    .refine((value) => typeof value === 'function'),
  panels: z.array(ComponentPanelSchema).optional(),
  props: z.record(
    z.string(),
    z.object({
      title: z.string().optional(),
      type: ComponentPropTypeSchema,
      default: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.unknown()),
        z.null(),
      ]),
      options: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
          })
        )
        .optional(),
      editor: ComponentPropEditorSchema,
    })
  ),
})

export type ComponentPanel = z.infer<typeof ComponentPanelSchema>
export type ComponentMeta = z.infer<typeof ComponentMetaSchema>
