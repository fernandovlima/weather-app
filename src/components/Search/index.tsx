import React, { useCallback, useEffect, useState } from 'react'
import publicIp from 'public-ip'

import { Forecast } from '../../api/forecastTypes'

import { Container, SearchWrapper } from './styles'
import SearchInput from './SearchInput'
import { getLocationByIP } from '../../api/getFunctions'

const Search: React.FC = () => {
  const [location, setLocation] = useState<string>('')
  const [ipAddress, setIpAddress] = useState<string>('')

  const getIp = useCallback(async () => {
    const IP = await publicIp.v4()
    setIpAddress(IP)
    const cityByIp = await getLocationByIP(ipAddress)
    setLocation(cityByIp)
  }, [])

  useEffect(() => {
    getIp()
  }, [])

  console.log(location)

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
