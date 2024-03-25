import { NextPage } from 'next'
import Layout from '../_layout'
import styled from 'styled-components'
import { trpc } from '@/utils/trpc'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

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
          alert(error.message)
        },
      }
    )
  }

  return (
    <Layout>
      <LoginContainer>
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
