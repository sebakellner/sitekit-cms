import { z } from 'zod'

export const ComponentPropPrimitivesSchema = z.union([
  z.literal('string'),
  z.literal('boolean'),
  z.literal('number'),
  z.literal('function'),
  z.literal('enum'),
  z.literal('object'),
])
