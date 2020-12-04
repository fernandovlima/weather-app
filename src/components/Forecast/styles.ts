import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'

import { fadeDown, flipInX } from 'react-animations'
const flipAnimation = keyframes`${flipInX}`
const fadeDownAnimation = keyframes`${fadeDown}`

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding-top: 2rem;
    align-items: flex-start;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  min-width: 50%;
  min-height: 80%;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px ${props => props.theme.colors.shadow};
`
export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const HeaderInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  svg {
    size: 24px;
    margin-right: 0.5rem;
  }

  :last-child {
    align-self: flex-end;
    justify-content: flex-end;
  }
`
export const NowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 40%;
  align-items: center;
`
export const Now = styled.p`
  font-size: 1.15rem;
  margin: 2rem 0;
`

export const TemperatureWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
`
export const Temperature = styled.p`
  font-size: 6rem;
  margin-right: 1.5rem;
`
export const WeatherInfo = styled.p`
  font-size: 1.5rem;
  margin: 1.75rem 0;
`

export const DailyWrapper = styled.div`
  display: flex;
  background-color: ${props => lighten(0.05, props.theme.colors.surface)};
  border-radius: 0.5rem;
  animation: 1s ${flipAnimation};
`
export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${props => props.theme.colors.text};
  margin: 1.5rem 0;

  &:last-child {
    border-right: none;
  }
`
export const Day = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`
export const Max = styled.p`
  font-size: 1.35rem;
  margin: 0.75rem 0;
`
export const Min = styled.p`
  font-size: 1rem;
`
export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  transition: 2s ease-in-out;
`
export const SearchInput = styled.input`
  background-color: ${props => props.theme.colors.surfacelight};
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 80%;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  outline: none;
  animation: 1s ${fadeDownAnimation};
`
