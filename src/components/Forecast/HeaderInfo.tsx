import React, { useContext } from 'react'
import { ImInfo, ImLocation, ImSearch } from 'react-icons/im'
import LocationContext from '../../contexts/LocaitionContext'
import IconButton from '../IconButton'

import { HeaderInfoWrapper, HeaderWrapper } from './styles'

const HeaderInfo: React.FC = () => {
  const { name } = useContext(LocationContext)
  return (
    <HeaderWrapper>
      <IconButton onClick={() => alert('test')}>
        <ImSearch size={20} />
      </IconButton>

      <HeaderInfoWrapper>
        <ImLocation size={20} />
        <p>{name}</p>
      </HeaderInfoWrapper>

      <IconButton onClick={() => alert('test')}>
        <ImInfo size={20} />
      </IconButton>
    </HeaderWrapper>
  )
}

export default HeaderInfo
