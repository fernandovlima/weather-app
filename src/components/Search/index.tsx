import React from 'react'

import { Container, SearchWrapper } from './styles'
import SearchInput from './SearchInput'

interface SearchProps {
  location: string
}
const Search: React.FC<SearchProps> = ({ location }) => {
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
        {location ? <h3>{`Você está em ${location}`}</h3> : ''}
        <SearchInput />
      </SearchWrapper>
    </Container>
  )
}

export default Search
