import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  permissions: z.string(),
  disabled: z.number(),
})

export const paintSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.string(),
  price: z.number(),
  stock: z.number(),
})
