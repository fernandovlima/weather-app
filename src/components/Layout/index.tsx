import publicIp from 'public-ip'
import React, { useCallback, useEffect, useState } from 'react'
import { getLocationByIP } from '../../api/getFunctions'
import Forecast from '../Forecast'
import Header from '../Header'
import Search from '../Search'

import { Container, ContentContainer } from './styles'

interface LayoutProps {
  toggleTheme: () => void
}
const Layout: React.FC<LayoutProps> = ({ toggleTheme }) => {
  const [location, setLocation] = useState<string>('')
  const [ipAddress, setIpAddress] = useState<string>('')

  const getIp = useCallback(async () => {
    const IP = await publicIp.v4()
    setIpAddress(IP)
    const cityByIp = await getLocationByIP(ipAddress)
    setLocation(cityByIp)
  }, [])

  useEffect(() => {
    getIp()
  }, [])

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <ContentContainer>
        <Search location={location} />
        <Forecast />
      </ContentContainer>
    </Container>
  )
}

export default Layout
