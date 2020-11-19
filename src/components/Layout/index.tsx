/* eslint-disable multiline-ternary */
import publicIp from 'public-ip'
import React, { useCallback, useEffect, useState } from 'react'
import { getLocationByIP, TLocation } from '../../api/locationByIp'
import LocationContext from '../../contexts/LocaitionContext'
import ReactLoading from 'react-loading'
import Forecast from '../Forecast'
import Header from '../Header'

import { Container, ContentContainer, LoadingWrapper } from './styles'
import { useTheme } from 'styled-components'

interface LayoutProps {
  toggleTheme: () => void
}
const Layout: React.FC<LayoutProps> = ({ toggleTheme }) => {
  const [location, setLocation] = useState<TLocation>()
  const [ipAddress, setIpAddress] = useState<string>()
  const { colors } = useTheme()

  const getIp = useCallback(async () => {
    const IP = await publicIp.v4()
    setIpAddress(IP)
    setTimeout(async () => {
      const cityByIp = await getLocationByIP(ipAddress)
      setLocation(cityByIp)
    }, 1000)
  }, [ipAddress, location])

  useEffect(() => {
    getIp()
  }, [])

  return (
    <LocationContext.Provider value={location}>
      <Container>
        <Header toggleTheme={toggleTheme} />
        <ContentContainer>
          {location !== undefined ? (
            <Forecast />
          ) : (
            <LoadingWrapper>
              <ReactLoading
                type="bars"
                width={100}
                height={30}
                color={colors.text}
              />
            </LoadingWrapper>
          )}
        </ContentContainer>
      </Container>
    </LocationContext.Provider>
  )
}

export default Layout
