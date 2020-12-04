import React, { useContext } from 'react'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/pt-br'

import qs from 'qs'

import Sunny from '../../assets/icons/day.svg'
import MostlySunny from '../../assets/icons/cloudy-day-1.svg'
import PartlySunny from '../../assets/icons/cloudy-day-2.svg'
import IntermClouds from '../../assets/icons/cloudy-day-3.svg'
import Cloudy from '../../assets/icons/cloudy.svg'
import Clear from '../../assets/icons/night.svg'
import MostlyClear from '../../assets/icons/cloudy-night-1.svg'
import PartlyClear from '../../assets/icons/cloudy-night-2.svg'
import IntermNight from '../../assets/icons/cloudy-night-3.svg'
import Showers from '../../assets/icons/rainy-4.svg'
import MostlyShowers from '../../assets/icons/rainy-3.svg'
import Thunder from '../../assets/icons/thunder.svg'
import Weather from '../../assets/icons/weather.svg'

import {
  NowWrapper,
  TemperatureWrapper,
  Temperature,
  Now,
  WeatherInfo,
  DailyWrapper
} from './styles'

import DayForecast from './DayForecast'
import LocationContext from '../../contexts/LocaitionContext'
import { DailyForecastsResponse } from '../../api/types/dailyForecastTypes'
import { Current } from '../../api/types/currentConditions'
import { useFetch } from '../../hooks/useFetch'

import { apiKey } from '../../config/apikey'
export const getIcon = (icon: number, night: boolean): JSX.Element => {
  switch (icon) {
    case 1:
    case 33:
      return !night ? <Clear /> : <Sunny />
    case 2:
    case 34:
      return !night ? <MostlyClear /> : <MostlySunny />
    case 3:
    case 35:
      return !night ? <PartlyClear /> : <PartlySunny />
    case 4:
    case 36:
      return !night ? <IntermNight /> : <IntermClouds />
    case 5:
    case 6:
    case 7:
    case 8:
    case 37:
    case 38:
      return <Cloudy />
    case 12:
      return <Showers />
    case 13:
    case 39:
    case 14:
    case 40:
      return !night ? <Showers /> : <MostlyShowers />
    case 15:
    case 16:
    case 17:
    case 41:
    case 42:
      return <Thunder />
    case 99:
      return <Showers />
    default:
      return <Weather />
  }
}
const WeatherNow: React.FC = () => {
  const { key } = useContext(LocationContext)

  dayjs.extend(localizedFormat)
  dayjs.locale('pt-br')
  const now = dayjs().format('dddd, D MMM, YYYY')

  const params = {
    apikey: apiKey,
    language: 'pt-BR',
    metric: true
  }

  const query = qs.stringify(params)

  const { data: conditions } = useFetch<DailyForecastsResponse>(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?${query}`
  )
  const { data: current } = useFetch<Current>(
    `http://dataservice.accuweather.com/currentconditions/v1/${key}?${query}`
  )

  return (
    <NowWrapper>
      <Now>{now}</Now>
      <TemperatureWrapper>
        <Temperature>
          {`${current[0].Temperature.Metric.Value.toFixed()}˚`}
        </Temperature>
        {getIcon(current[0].WeatherIcon, current[0].IsDayTime)}
      </TemperatureWrapper>
      <WeatherInfo>{current[0].WeatherText}</WeatherInfo>
      <DailyWrapper>
        {conditions?.DailyForecasts.map((day, idx) => (
          <DayForecast day={day} key={idx} />
        ))}
      </DailyWrapper>
    </NowWrapper>
  )
}

export default WeatherNow
