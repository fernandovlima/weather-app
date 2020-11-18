import React from 'react'
import { getIcon } from './WeatherNow'

import { DayWrapper, Day, Max, Min } from './styles'

const DayForecast: React.FC = () => {
  return (
    <DayWrapper>
      <Day>18 Nov</Day>
      {getIcon(13, false)}
      <Max>20˚</Max>
      <Min>14˚</Min>
    </DayWrapper>
  )
}

export default DayForecast
