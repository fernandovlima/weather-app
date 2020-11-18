import qs from 'qs'
import { apiKey } from './apikey'

interface TLocationIPResponse {
  ParentCity: {
    LocalizedName: string
  }
}

export async function getLocationByIP(ip: string): Promise<string> {
  const params = {
    apikey: apiKey,
    q: ip,
    language: 'pt-BR',
    details: true
  }

  const query = qs.stringify(params)

  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/ipaddress?${query}`
  )
  const data: TLocationIPResponse = await response.json()

  return data.ParentCity.LocalizedName
}
