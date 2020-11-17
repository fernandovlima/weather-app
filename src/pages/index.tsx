import React from 'react'
import Head from 'next/head'
import { useFetch } from '../hooks/useFetch'
import qs from 'qs'

import { apiKey } from '../api/apikey'

const Home: React.FC = () => {
  const params = {
    apikey: apiKey,
    q: 'curitiba',
    language: 'pt-BR'
  }
  const locationParams = {
    apikey: apiKey,
    language: 'pt-BR',
    details: true,
    metric: true
  }

  const query = qs.stringify(params)
  const { data: location } = useFetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?${query}`
  )

  const { Key } = location[0]

  const queryForecast = qs.stringify(locationParams)

  const { data: forecast } = useFetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${Key}?${queryForecast}`
  )

  console.log(forecast)
  return (
    <div>
      <Head>
        <title>Weather APP</title>
      </Head>

      <main>
        <h1>Hello</h1>
      </main>
    </div>
  )
}

export default Home
