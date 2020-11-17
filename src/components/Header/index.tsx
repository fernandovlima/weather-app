import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import SwithTheme from 'react-switch'

import { BsMoon, BsSun } from 'react-icons/bs'
import { Container, LeftContainer } from './styles'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/pt-br'

interface HeaderProps {
  toggleTheme: () => void
}
const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  dayjs.extend(localizedFormat)
  dayjs.locale('pt-br')
  const now = dayjs().format('llll')

  const LightThemeIcon = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: 20,
        color: colors.text,
        paddingRight: 2
      }}
    >
      <BsMoon />
    </div>
  )

  const DarkThemeIcon = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: 20,
        color: colors.primary,
        paddingRight: 2
      }}
    >
      <BsSun />
    </div>
  )

  return (
    <Container>
      <LeftContainer>
        <h3>Previsão do tempo</h3>
        <p>{`${now}`}</p>
      </LeftContainer>

      <SwithTheme
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={<DarkThemeIcon />}
        uncheckedIcon={<LightThemeIcon />}
        height={35}
        width={70}
        handleDiameter={30}
        offColor={colors.primary}
        onColor={colors.text}
      />
    </Container>
  )
}

export default Header
