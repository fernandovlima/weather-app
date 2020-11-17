import React from 'react'
import Forecast from '../Forecast'
import Header from '../Header'
import Search from '../Search'

import { Container, ContentContainer } from './styles'

interface LayoutProps {
  toggleTheme: () => void
}
const Layout: React.FC<LayoutProps> = ({ toggleTheme }) => {
  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <ContentContainer>
        <Search />
        <Forecast />
      </ContentContainer>
    </Container>
  )
}

export default Layout
