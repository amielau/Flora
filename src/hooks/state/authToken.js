import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const authToken = atom({
  key: 'global/auth/token',
  default: null,
  effects_UNSTABLE: [persistAtom],
})
