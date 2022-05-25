import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const useFetchRetry = options => {
  const { shouldRetryAfterError, errorRetryCount = 0, errorRetryInterval = 5000 } = options || {}

  const masterRetryCount = useMemo(() => {
    return (shouldRetryAfterError && errorRetryCount) || 0
  }, [shouldRetryAfterError, errorRetryCount])

  const [retryCounts, setRetryCount] = useState({})
  const timestamps = useRef({})
  const timeout = useRef()

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [])

  const canRetry = useCallback(
    key => {
      const count = isNaN(retryCounts[key]) ? masterRetryCount : retryCounts[key]
      setRetryCount(curr => {
        curr[key] = Math.max(0, count - 1)
        return curr
      })

      const now = Date.now()
      const waitPeriod = Math.max(0, errorRetryInterval - (now - (timestamps.current[key] || now)))
      const willRetry = count > 1
      return new Promise(resolve => {
        timeout.current = setTimeout(
          () => {
            resolve(willRetry)
            timeout.current = null
          },
          willRetry ? waitPeriod : 0,
        )
      })
    },
    [masterRetryCount, retryCounts, errorRetryInterval, setRetryCount],
  )

  const setTried = useCallback(key => {
    timestamps.current[key] = Date.now()
  }, [])

  return { canRetry, setTried }
}
