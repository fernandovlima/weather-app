import React from 'react'
import { TLocation } from '../../api/getFunctions'
import { ImLocation, ImInfo, ImSearch } from 'react-icons/im'

import { Container, HeaderInfo, HeaderWrapper, Wrapper } from './styles'
import IconButton from '../IconButton'

interface ForecastProps {
  location: TLocation
}
const Forecast: React.FC<ForecastProps> = ({ location }) => {
  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <IconButton onClick={() => alert('test')}>
            <ImSearch size={20} />
          </IconButton>

          <HeaderInfo>
            <ImLocation size={20} />
            <p>{location.name}</p>
          </HeaderInfo>

          <IconButton onClick={() => alert('test')}>
            <ImInfo size={20} />
          </IconButton>
        </HeaderWrapper>
      </Wrapper>
    </Container>
  )
}

export default Forecast
