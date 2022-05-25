import { useCallback } from 'react'
import { getApiUrl } from './getApiUrl'
import { useFetchHandler } from './useFetchHandler'
import { usePayload } from './usePayload'
import { useProcessFetch } from './useProcessFetch'

export const usePost = options => {
  const { fetch, isFetching } = useFetchHandler(options)

  const getPayload = usePayload('POST')
  const processFetch = useProcessFetch()

  const post = useCallback(
    async (url, body) => {
      return fetch(() => processFetch(getApiUrl(url), getPayload(body)))
    },
    [fetch, getPayload, processFetch],
  )

  return {
    post,
    isActive: isFetching,
  }
}
