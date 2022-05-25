import { useCallback, useMemo } from 'react'
import { useAuthToken } from './useAuthToken'

export const usePayload = method => {
  const token = useAuthToken()

  const payload = useMemo(
    () => ({
      credentials: 'include',
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
    [token, method],
  )

  return useCallback(
    body =>
      body
        ? {
            ...payload,
            body: JSON.stringify(body),
          }
        : payload,
    [payload],
  )
}
