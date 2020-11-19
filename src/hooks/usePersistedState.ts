import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback
} from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export default function usePersistedState<T>(
  key: string,
  initialValue: T
): Response<T> {
  const [state, setState] = useState(initialValue)

  const storageValue = useCallback(() => {
    const storage = localStorage.getItem(key)

    if (storageValue) {
      return setState(JSON.parse(storage))
    } else {
      return setState(initialValue)
    }
  }, [])

  useEffect(() => {
    storageValue()
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}
