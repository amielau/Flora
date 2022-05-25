import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const authUser = atom({
  key: 'global/auth/user',
  default: {},
  effects_UNSTABLE: [persistAtom],
})
