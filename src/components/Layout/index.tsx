import publicIp from 'public-ip'
import React, { useCallback, useEffect, useState } from 'react'
import { getLocationByIP, TLocation } from '../../api/getFunctions'
import Forecast from '../Forecast'
import Header from '../Header'

import { Container, ContentContainer } from './styles'

interface LayoutProps {
  toggleTheme: () => void
}
const Layout: React.FC<LayoutProps> = ({ toggleTheme }) => {
  const [location, setLocation] = useState<TLocation>({
    name: 'Curitiba - PR - Brasil',
    key: ''
  })
  const [ipAddress, setIpAddress] = useState<string>('')

  const getIp = useCallback(async () => {
    const IP = await publicIp.v4()
    setIpAddress(IP)
    const cityByIp = await getLocationByIP(ipAddress)
    setLocation(cityByIp)
  }, [])

  useEffect(() => {
    // getIp()
  }, [])

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <ContentContainer>
        <Forecast location={location} />
      </ContentContainer>
    </Container>
  )
}

export default Layout
