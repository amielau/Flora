import fetch from 'isomorphic-fetch'
import { useCallback } from 'react'
import { resolveResponse } from './resolveResponse'

export const useProcessFetch = () => {
  const processFetch = useCallback(async (url, payload) => {
    const request = await fetch(url, payload)
    if (request.ok) {
      const response = await resolveResponse(request)
      return response
    } else {
      console.error('Error with request', request.status, request.error)
    }
  }, [])

  return processFetch
}
