import React from 'react'
import { TLocation } from '../../api/getFunctions'
import HeaderInfo from './HeaderInfo'

import { Container, Wrapper } from './styles'
import WeatherNow from './WeatherNow'

interface ForecastProps {
  location: TLocation
}
const Forecast: React.FC<ForecastProps> = ({ location }) => {
  return (
    <Container>
      <Wrapper>
        <HeaderInfo location={location} />
        <WeatherNow />
      </Wrapper>
    </Container>
  )
}

export default Forecast
