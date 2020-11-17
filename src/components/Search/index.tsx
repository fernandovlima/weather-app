import React from 'react'
import { apiKey } from '../../api/apikey'

import { useFetch } from '../../hooks/useFetch'
import qs from 'qs'

import { Forecast } from '../../api/forecastTypes'

import { Container, SearchWrapper } from './styles'
import SearchInput from './SearchInput'

const Search: React.FC = () => {
  // const params = {
  //   apikey: apiKey,
  //   q: 'curitiba',
  //   language: 'pt-BR'
  // }
  // const locationParams = {
  //   apikey: apiKey,
  //   language: 'pt-BR',
  //   details: true,
  //   metric: true
  // }

  // const query = qs.stringify(params)

  // const { data: location } = useFetch(
  //   `http://dataservice.accuweather.com/locations/v1/cities/search?${query}`
  // )

  // const key = location[0]?.Key

  // if (!location) {
  //   return <p>Carregando...</p>
  // }

  // const queryForecast = qs.stringify(locationParams)

  // // const { data: forecast } = useFetch<Forecast>(
  // //   `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?${queryForecast}`
  // // )

  // if (!forecast) {
  //   return <div>Carregando...</div>
  // }

  return (
    <Container>
      <SearchWrapper>
        <SearchInput />
      </SearchWrapper>
    </Container>
  )
}

export default Search
