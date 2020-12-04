import qs from 'qs'
import { apiKey } from '../config/apikey'
import { DailyForecastsResponse } from './types/dailyForecastTypes'

export interface TLocation {
  name: string
  key: string
}

export async function getCurrentConditions(key: string): Promise<any> {
  const params = {
    apikey: apiKey,
    language: 'pt-BR'
  }

  const query = qs.stringify(params)

  await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${key}?${query}`
  ).then(response => {
    return response.json()
  })
}
