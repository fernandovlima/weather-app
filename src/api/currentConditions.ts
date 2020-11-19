import qs from 'qs'
import { apiKey } from '../config/apikey'
import { DailyForecastsResponse } from './types/dailyForecastTypes'

export interface TLocation {
  name: string
  key: string
}

export async function getCurrentConditions(
  key: string
): Promise<DailyForecastsResponse> {
  const params = {
    apikey: apiKey,
    language: 'pt-BR'
  }

  const query = qs.stringify(params)

  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${key}`
  )
  const data = await response.json()

  return data
}
