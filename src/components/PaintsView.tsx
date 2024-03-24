import { User } from '@/types'
import { trpc } from '@/utils/trpc'
import { FunctionComponent } from 'react'
import Cookies from 'js-cookie'
import styled from 'styled-components'

type Props = {
  user: User
}

export const PaintsView: FunctionComponent<Props> = ({ user }) => {
  const userPermissions = user.permissions
  if (user.disabled || !userPermissions.includes('painter:read')) return null
  const token = Cookies.get('token')
  if (!token) return null

  const { data } = trpc.paint.getAll.useQuery({
    token,
  })

  if (!data) return null
  return (
    <>
      <h2>Paints</h2>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Name</StyledTableHeader>
            <StyledTableHeader>Color</StyledTableHeader>
            <StyledTableHeader>Price</StyledTableHeader>
            <StyledTableHeader>Stock</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {data?.map((paint) => (
            <tr key={paint.id}>
              <StyledTableCell>{paint.name}</StyledTableCell>
              <StyledTableCell>{paint.color}</StyledTableCell>
              <StyledTableCell>{paint.price}</StyledTableCell>
              <StyledTableCell>{paint.stock}</StyledTableCell>
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
