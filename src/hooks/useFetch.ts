import useSWR from 'swr'

export function useFetch<T>(url: string) {
  const { data, error } = useSWR<T>(url, async url => {
    const response = await fetch(url)
    const data = await response.json()

    return data
  })

  return { data, error }
}
