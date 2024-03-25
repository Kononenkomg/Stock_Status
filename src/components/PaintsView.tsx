import { User } from '@/types'
import { trpc } from '@/utils/trpc'
import { FunctionComponent, useState } from 'react'
import Cookies from 'js-cookie'
import styled from 'styled-components'

type Props = {
  user: User
}

export const PaintsView: FunctionComponent<Props> = ({ user }) => {
  const [stock, setStock] = useState('0')
  const userPermissions = user.permissions
  if (user.disabled || !userPermissions.includes('painter:read')) return null
  const token = Cookies.get('token')
  if (!token) return null

  const isAllowEdit = userPermissions.includes('painter:write')

  const { data } = trpc.paint.getAll.useQuery({
    token,
  })

  const updatePaintStock = trpc.paint.updatePaintStock.useMutation()

  if (!data) return null

  const saveNewStockNumber = (paintId: number, newStock: string) => {
    updatePaintStock.mutate(
      {
        token,
        paintId,
        newStock,
      },
      {
        onSuccess: () => {
          alert('Stock updated')
        },
        onError: (err) => {
          alert(err.message)
        },
      }
    )
  }
  return (
    <>
      <h2>Paints</h2>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>ID</StyledTableHeader>
            <StyledTableHeader>Name</StyledTableHeader>
            <StyledTableHeader>Color</StyledTableHeader>
            <StyledTableHeader>Price</StyledTableHeader>
            <StyledTableHeader>Stock</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {data?.map((paint) => (
            <tr key={paint.id}>
              <StyledTableCell>{paint.id}</StyledTableCell>
              <StyledTableCell>{paint.name}</StyledTableCell>
              <StyledTableCell>{paint.color}</StyledTableCell>
              <StyledTableCell>{paint.price}</StyledTableCell>
              {isAllowEdit ? (
                <StyledTableCell>
                  <input
                    type="number"
                    defaultValue={paint.stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                  <button onClick={() => saveNewStockNumber(paint.id, stock)}>
                    Save
                  </button>
                </StyledTableCell>
              ) : (
                <StyledTableCell>{paint.stock}</StyledTableCell>
              )}
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
