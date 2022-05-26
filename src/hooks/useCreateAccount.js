import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { authToken } from './state/authToken'
import { authUser } from './state/authUser'
import { usePost } from './usePost'

export const useCreateAccount = () => {
  const { post, isActive } = usePost()

  const [token, setToken] = useRecoilState(authToken)
  const [user, setUser] = useRecoilState(authUser)

  const submit = useCallback(
    async (values, onSuccess) => {
      const { user, token } = await post('api/users/register', values)
      setToken(token)
      setUser(user)
      onSuccess()
    },
    [post, setToken, setUser],
  )

  return {
    submit,
    token,
    user,
    isActive,
  }
}
