import { GetServerSideProps, NextPage } from 'next'
import Layout from '@/pages/_layout'
import { proxyClient } from '@/server/helpers'
import { User } from '@/types'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { UserManagement } from '@/components/UserManagement'
import { PaintsView } from '@/components/PaintsView'
import { OrdersManagement } from '@/components/OrdersManagement'

type Props = {
  user: User
}

const Home: NextPage<Props> = ({ user }) => {
  const router = useRouter() // Move the hook call to the component body

  const removeToken = () => {
    // remove token from cookie
    Cookies.remove('token')
    router.push('/login')
  }
  return (
    <Layout>
      <Container>
        <StyledHeader>
          <p>Hello {user.name}</p>
          <StyledButton onClick={removeToken}>Log Out</StyledButton>
        </StyledHeader>
        <UserManagement user={user} />
        <PaintsView user={user} />
        <OrdersManagement user={user} />
      </Container>
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = ctx.req.cookies

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const { status, user } = await proxyClient.auth.auth.query({
    token: cookies.token,
  })

  if (status === 'ok') {
    return {
      props: {
        user,
      },
    }
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  }
}

const StyledButton = styled.button`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
