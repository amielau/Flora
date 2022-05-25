import { useCallback } from 'react'
import { getApiUrl } from './getApiUrl'
import { useFetchHandler } from './useFetchHandler'
import { useFetchRetry } from './useFetchRetry'
import { usePayload } from './usePayload'
import { useProcessGet } from './useProcessGet'

export const useGet = options => {
  const { fetch, isFetching } = useFetchHandler(options)

  const getPayload = usePayload('GET')

  const { canRetry, setTried } = useFetchRetry(options)
  const processFetch = useProcessGet(canRetry, setTried)

  const get = useCallback(
    url => {
      return fetch(() => processFetch(getApiUrl(url), getPayload()))
    },
    [getPayload, fetch, processFetch],
  )

  return { get, isActive: isFetching }
}
