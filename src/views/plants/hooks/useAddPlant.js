import { useCallback } from 'react'
import { usePost } from '../../../hooks/usePost'

export const useAddPlant = () => {
  const { post, isActive } = usePost()

  const save = useCallback(
    async values => {
      await post('/api/plants', values)
    },
    [post],
  )

  return {
    save,
    isActive,
  }
}
