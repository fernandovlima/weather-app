import React from 'react'
import { ImInfo, ImLocation, ImSearch } from 'react-icons/im'
import { TLocation } from '../../api/getFunctions'
import IconButton from '../IconButton'

import { HeaderInfoWrapper, HeaderWrapper } from './styles'

interface HeaderInfoProps {
  location: TLocation
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({ location }) => {
  return (
    <HeaderWrapper>
      <IconButton onClick={() => alert('test')}>
        <ImSearch size={20} />
      </IconButton>

      <HeaderInfoWrapper>
        <ImLocation size={20} />
        <p>{location.name}</p>
      </HeaderInfoWrapper>

      <IconButton onClick={() => alert('test')}>
        <ImInfo size={20} />
      </IconButton>
    </HeaderWrapper>
  )
}

export default HeaderInfo
