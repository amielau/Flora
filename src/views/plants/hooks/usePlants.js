import useSWR from 'swr'
import { useGet } from '../../../hooks/useGet'

export const usePlants = () => {
  const { get, isActive } = useGet()

  const { data } = useSWR('/api/plants', async url => {
    const results = await get(url)
    return results ?? []
  })

  return {
    data: data ?? [],
    isActive,
  }
}
