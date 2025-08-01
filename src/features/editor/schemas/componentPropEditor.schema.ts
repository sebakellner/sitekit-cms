import { z } from 'zod'

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
