import React, { useContext, useState } from 'react'
import { Animated } from 'react-animated-css'
import { ImInfo, ImLocation, ImSearch } from 'react-icons/im'
import LocationContext from '../../contexts/LocaitionContext'
import IconButton from '../IconButton'

import {
  HeaderInfoWrapper,
  HeaderWrapper,
  SearchWrapper,
  SearchInput
} from './styles'

const HeaderInfo: React.FC = () => {
  const { name } = useContext(LocationContext)

  const [searchLocation, setsearchLocation] = useState()
  const [isSearching, setIsSearching] = useState<boolean>(false)
  return (
    <>
      <HeaderWrapper>
        <IconButton onClick={() => setIsSearching(!isSearching)}>
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
      {isSearching && (
        <SearchWrapper>
          <SearchInput />
        </SearchWrapper>
      )}
    </>
  )
}

export default HeaderInfo
