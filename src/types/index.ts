export type User = {
  id: number
  name: string
  email: string
  role: string
  permissions: string
  disabled: number // 0 or 1
}

export type Paint = {
  id: number
  name: string
  color: string
  price: number
  stock: number
}
