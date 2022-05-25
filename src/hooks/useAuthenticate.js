import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'
import { authToken } from './state/authToken'
import { authUser } from './state/authUser'
import { usePost } from './usePost'

export const useAuthenticate = () => {
  const { post, isActive } = usePost()

  const navigate = useNavigate()
  const [token, setToken] = useRecoilState(authToken)
  const [user, setUser] = useRecoilState(authUser)

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate])

  const login = useCallback(
    async ({ username, password }, onSuccess) => {
      const { user, token } = await post('/api/login', { username, password })
      setToken(token)
      setUser(user)
      onSuccess()
    },
    [post, setToken, setUser],
  )

  return {
    token,
    user,
    login,
    isActive,
  }
}
