import fetch from 'isomorphic-fetch'
import { useCallback, useEffect, useRef, useState } from 'react'
import { resolveResponse } from './resolveResponse'

export const useProcessGet = (canRetry, setTried) => {
  const cancelRef = useRef(false)

  useEffect(() => {
    return () => {
      cancelRef.current = true
    }
  })

  const [errors, setError] = useState({})

  const processFetch = useCallback(
    async (url, payload) => {
      if (errors[url]) {
        const canProceed = !cancelRef.current && (await canRetry(url))
        if (!canProceed) {
          console.error('Error proceeding with fetch', url)
        }
      }

      const request = await fetch(url, payload)
      setTried(url)

      if (request.ok) {
        const response = await resolveResponse(request)
        return response
      } else {
        !cancelRef.current &&
          setError(curr => {
            curr[url] = request
            return curr
          })
      }
    },
    [errors, setTried, canRetry],
  )

  return processFetch
}
