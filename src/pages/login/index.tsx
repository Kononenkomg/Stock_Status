import { NextPage } from 'next'
import Layout from '../_layout'
import styled from 'styled-components'
import { trpc } from '@/utils/trpc'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { USERS } from '@/constants/users'

const Login: NextPage = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const validateEmailAndPassword = trpc.auth.login.useMutation()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    validateEmailAndPassword.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          //set token in cookie
          Cookies.set('token', data)
          router.push('/')
        },
        onError: (error) => {
          console.error(error)
        },
      }
    )
  }

  return (
    <Layout>
      <LoginContainer>
        {/* TODO: remove once done with dev */}
        <h2>Users!:</h2>
        <ul>
          {USERS.map((user) => (
            <li key={user.email}>{user.email}</li>
          ))}
        </ul>
        <h1>Login</h1>
        <StyledForm onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </StyledForm>
      </LoginContainer>
    </Layout>
  )
}

export default Login

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
