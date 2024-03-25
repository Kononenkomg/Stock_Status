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

export const orderSchema = z.object({
  id: z.number(),
  userId: z.number(),
  paintId: z.number(),
  quantity: z.number(),
  date: z.string(),
  status: z.union([
    z.literal('pending'),
    z.literal('completed'),
    z.literal('cancelled'),
  ]),
})
