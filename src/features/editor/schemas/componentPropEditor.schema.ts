import { z } from 'zod'

export const ComponentPropEditorSchema = z.union([
  z.literal('text'),
  z.literal('colorPicker'),
  z.literal('select'),
  z.literal('listEditor'),
])
