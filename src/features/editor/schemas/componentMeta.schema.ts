import { z } from 'zod'
import { ComponentPropEditorSchema } from './componentPropEditor.schema'
import { ComponentPropPrimitivesSchema } from './componentPropPrimitives'

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
      type: ComponentPropPrimitivesSchema,
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
