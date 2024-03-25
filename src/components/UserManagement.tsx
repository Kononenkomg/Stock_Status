import { FunctionComponent, useEffect, useState } from 'react'
import { trpc } from '@/utils/trpc'
import Cookies from 'js-cookie'
import { User } from '@/types'
import styled from 'styled-components'
import { useRouter } from 'next/router'

type Props = {
  user: User
}

export const UserManagement: FunctionComponent<Props> = ({ user }) => {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [newUser, setNewUser] = useState<
    Omit<User, 'id'> & { password: string }
  >({
    password: '',
    name: '',
    email: '',
    role: '',
    permissions: '',
    disabled: 0,
  })
  const userPermissions = user.permissions
  if (
    user.role !== 'admin' ||
    user.disabled ||
    !userPermissions.includes('admin:read')
  )
    return null
  const token = Cookies.get('token')
  if (!token) return null
  const { data } = trpc.user.getAll.useQuery({
    token,
  })

  const updateUsers = trpc.user.update.useMutation()
  const createNewUser = trpc.user.createNewUser.useMutation()

  const isAllowedToWrite = userPermissions.includes('admin:write')

  useEffect(() => {
    if (data) {
      setUsers(data)
    }
  }, [data])

  if (!data) return null

  const setUser = (updatedUser: User) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    )
  }

  const saveEdits = () => {
    updateUsers.mutate(
      { token, users },
      {
        onSuccess() {
          alert('Users updated successfully')
        },
        onError(error) {
          alert('Error updating users: ' + error.message)
        },
      }
    )
  }

  const saveNewUser = () => {
    createNewUser.mutate(
      { token, newUser },
      {
        onSuccess() {
          alert('User created successfully')
          router.reload()
        },
        onError(error) {
          alert('Error creating user: ' + error.message)
        },
      }
    )
  }

  return (
    <UserManagementInfoContainer>
      <h3>Users</h3>
      {users.map((user) => (
        <UserInfoContainer key={user.id}>
          <StyledForm>
            <StyledLabel>
              ID:
              <StyledInput type="text" value={user.id} readOnly />
            </StyledLabel>
            <StyledLabel>
              Name:
              <StyledInput
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                readOnly={!isAllowedToWrite}
              />
            </StyledLabel>
            <StyledLabel>
              Email:
              <StyledInput
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                readOnly={!isAllowedToWrite}
              />
            </StyledLabel>
            <StyledLabel>
              Role:
              <StyledInput
                type="text"
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
                readOnly={!isAllowedToWrite}
              />
            </StyledLabel>
            <StyledLabel>
              Permissions:
              <StyledInput
                type="text"
                value={user.permissions}
                onChange={(e) =>
                  setUser({ ...user, permissions: e.target.value })
                }
                readOnly={!isAllowedToWrite}
              />
            </StyledLabel>
            <StyledLabel>
              Disabled:
              <StyledInput
                type="checkbox"
                checked={Boolean(user.disabled)}
                onChange={(e) =>
                  setUser({ ...user, disabled: e.target.checked ? 1 : 0 })
                }
                readOnly={!isAllowedToWrite}
              />
            </StyledLabel>
          </StyledForm>
        </UserInfoContainer>
      ))}
      <StyledButton onClick={saveEdits} disabled={!isAllowedToWrite}>
        Save
      </StyledButton>
      <h3>Add User</h3>
      <UserInfoContainer>
        <StyledForm>
          <StyledLabel>
            Name:
            <StyledInput
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              readOnly={!isAllowedToWrite}
            />
          </StyledLabel>
          <StyledLabel>
            Email:
            <StyledInput
              type="email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              readOnly={!isAllowedToWrite}
            />
          </StyledLabel>
          <StyledLabel>
            Password:
            <StyledInput
              type="text"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              readOnly={!isAllowedToWrite}
            />
          </StyledLabel>
          <StyledLabel>
            Role:
            <StyledInput
              type="text"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              readOnly={!isAllowedToWrite}
            />
          </StyledLabel>
          <StyledLabel>
            Permissions:
            <StyledInput
              type="text"
              value={newUser.permissions}
              onChange={(e) =>
                setNewUser({ ...newUser, permissions: e.target.value })
              }
              readOnly={!isAllowedToWrite}
            />
          </StyledLabel>
          <StyledLabel>
            Disabled:
            <StyledInput
              type="checkbox"
              checked={Boolean(newUser.disabled)}
              onChange={(e) =>
                setNewUser({ ...newUser, disabled: e.target.checked ? 1 : 0 })
              }
              readOnly={!isAllowedToWrite}
            />
          </StyledLabel>
        </StyledForm>
        <StyledButton onClick={saveNewUser} disabled={!isAllowedToWrite}>
          Create
        </StyledButton>
      </UserInfoContainer>
    </UserManagementInfoContainer>
  )
}

const UserManagementInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #ffffff;
`

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`

const StyledLabel = styled.label``

const StyledInput = styled.input``
