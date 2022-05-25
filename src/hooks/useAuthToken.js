import { useRecoilValue } from 'recoil'
import { authToken } from './state/authToken'

export const useAuthToken = () => {
  return useRecoilValue(authToken)
}
