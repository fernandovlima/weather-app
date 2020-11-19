import { createContext } from 'react'
import { TLocation } from '../api/locationByIp'

const LocationContext = createContext({ name: '', key: '' })

export default LocationContext
