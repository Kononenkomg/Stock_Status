import { User } from '@/types'
import { FunctionComponent, useState } from 'react'
import { trpc } from '@/utils/trpc'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { useRouter } from 'next/router'

type Props = {
  user: User
}

export const OrdersManagement: FunctionComponent<Props> = ({ user }) => {
  const router = useRouter()
  const [paintId, setPaintId] = useState(0)
  const [orderQuantity, setOrderQuantity] = useState(0)
  if (user.disabled || user.role !== 'manager') return null
  const token = Cookies.get('token')
  if (!token) return null

  const { data } = trpc.orders.getAll.useQuery({
    token,
  })

  const createOrder = trpc.orders.createOrder.useMutation()
  const cancelOrder = trpc.orders.cancelOrder.useMutation()
  const completeOrder = trpc.orders.completeOrder.useMutation()

  if (!data) return null

  const createNewOrder = (paintId: number, quantity: number) => {
    createOrder.mutate(
      {
        token,
        paintId,
        quantity,
      },
      {
        onSuccess: () => {
          alert('Order created')
          router.reload()
        },
        onError: (err) => {
          alert(err.message)
        },
      }
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createNewOrder(paintId, orderQuantity)
  }

  const handleCancelOrder = (orderId: number) => {
    cancelOrder.mutate(
      {
        token,
        orderId,
      },
      {
        onSuccess: () => {
          alert('Order cancelled')
          router.reload()
        },
        onError: (err) => {
          alert(err.message)
        },
      }
    )
  }

  const handleCompleteOrder = (orderId: number) => {
    completeOrder.mutate(
      {
        token,
        orderId,
      },
      {
        onSuccess: () => {
          alert('Order completed')
          router.reload()
        },
        onError: (err) => {
          alert(err.message)
        },
      }
    )
  }

  return (
    <>
      <h2>Orders Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Paint Id
          <input
            type="number"
            value={paintId}
            onChange={(e) => setPaintId(Number(e.target.value))}
          />
        </label>
        <label>
          Order Quantity:
          <input
            type="number"
            value={orderQuantity}
            onChange={(e) => setOrderQuantity(Number(e.target.value))}
          />
        </label>

        <button type="submit">Create Order</button>
      </form>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Order ID</StyledTableHeader>
            <StyledTableHeader>Ordered By</StyledTableHeader>
            <StyledTableHeader>Paint ID</StyledTableHeader>
            <StyledTableHeader>Quantity</StyledTableHeader>
            <StyledTableHeader>Date</StyledTableHeader>
            <StyledTableHeader>Status</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id}>
              <StyledTableCell>{order.id}</StyledTableCell>
              <StyledTableCell>{order.userId}</StyledTableCell>
              <StyledTableCell>{order.paintId}</StyledTableCell>
              <StyledTableCell>{order.quantity}</StyledTableCell>
              <StyledTableCell>
                {new Date(order.date).toISOString().split('T')[0]}
              </StyledTableCell>
              <StyledTableCell>
                {order.status}{' '}
                <button onClick={() => handleCancelOrder(order.id)}>
                  cancel
                </button>
                <button onClick={() => handleCompleteOrder(order.id)}>
                  complete
                </button>
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`

const StyledTableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`

const StyledTableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`
