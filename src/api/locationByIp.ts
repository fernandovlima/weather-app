import qs from 'qs'
import { apiKey } from '../config/apikey'

export interface TLocation {
  name: string
  key: string
}

interface TLocationIPResponse {
  ParentCity: {
    LocalizedName: string
    Key: string
  }
  AdministrativeArea: {
    ID: string
  }
  Country: {
    LocalizedName: string
  }
}

export async function getLocationByIP(ip: string): Promise<TLocation> {
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

  const location = {
    name: `${data.ParentCity.LocalizedName} - ${data.AdministrativeArea.ID} - ${data.Country.LocalizedName}`,
    key: data.ParentCity.Key
  }

  return location
}
