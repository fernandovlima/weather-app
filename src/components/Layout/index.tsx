import React from 'react'
import Header from '../Header'
import Search from '../Search'

import { Container } from './styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  )
}

export default Layout
