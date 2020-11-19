import React, { useEffect, useState } from 'react'
import { getIcon } from './WeatherNow'

import { DayWrapper, Day, Max, Min } from './styles'
import { DayForecastResponse } from '../../api/types/dayForecast'
import dayjs from 'dayjs'

interface DayForecastProps {
  day: DayForecastResponse
}

const DayForecast: React.FC<DayForecastProps> = ({ day }) => {
  const [isNight, setIsNight] = useState<boolean>(false)
  const date = dayjs(day.Date).format('D MMM')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour > 18) {
      setIsNight(true)
    }
  }, [])

  return (
    <DayWrapper>
      <Day>{date}</Day>
      {getIcon(isNight ? day.Night.Icon : day.Day.Icon, isNight)}
      <Max>{`${day.Temperature.Maximum.Value.toFixed()}˚`}</Max>
      <Min>{`${day.Temperature.Minimum.Value.toFixed()}˚`}</Min>
    </DayWrapper>
  )
}

export default DayForecast
