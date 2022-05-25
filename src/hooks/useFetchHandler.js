import { useCallback, useEffect, useRef, useState } from 'react'

export const useFetchHandler = (options = {}) => {
  const cancelRef = useRef(false)

  useEffect(() => {
    return () => {
      cancelRef.current = true
    }
  }, [])

  const { initialFetching = false, onError } = options

  const [isFetching, setIsFetching] = useState(initialFetching)

  const doneFetching = useCallback(() => {
    setTimeout(() => {
      !cancelRef.current && setIsFetching(false)
    })
  }, [setIsFetching])

  const fetch = useCallback(
    async fetcher => {
      setIsFetching(true)
      let result

      try {
        result = await fetcher()
      } catch (err) {
        if (onError) {
          onError(err)
        }
        throw err
      } finally {
        doneFetching()
      }
      return result
    },
    [onError, doneFetching],
  )

  return { fetch, isFetching }
}
