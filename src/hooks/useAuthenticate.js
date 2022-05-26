import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { authToken } from './state/authToken'
import { authUser } from './state/authUser'
import { usePost } from './usePost'

export const useAuthenticate = () => {
  const { post, isActive } = usePost()

  const [token, setToken] = useRecoilState(authToken)
  const [user, setUser] = useRecoilState(authUser)

  const login = useCallback(
    async (values, onSuccess) => {
      const { user, token } = await post('/api/users/login', values)
      setToken(token)
      setUser(user)
      onSuccess()
    },
    [post, setToken, setUser],
  )

  const logout = useCallback(
    onComplete => {
      setToken(null)
      setUser({})
      onComplete()
    },
    [setToken, setUser],
  )

  return {
    token,
    user,
    login,
    logout,
    isActive,
  }
}
