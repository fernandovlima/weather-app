import React from 'react'
import HeaderInfo from './HeaderInfo'

import { Container, Wrapper } from './styles'
import WeatherNow from './WeatherNow'

const Forecast: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderInfo />
        <WeatherNow />
      </Wrapper>
    </Container>
  )
}

export default Forecast
