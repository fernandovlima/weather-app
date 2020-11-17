import React, { useContext } from 'react'

import SwithTheme from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

interface HeaderProps {
  toggleTheme: () => void
}
const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <h2>Previsão do tempo</h2>

      <SwithTheme
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={45}
        handleDiameter={30}
        offColor={colors.primary}
        onColor={colors.text}
      />
    </Container>
  )
}

export default Header
