import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import Layout from '../components/Layout'
import usePersistedState from '../hooks/usePersistedState'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Layout toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
