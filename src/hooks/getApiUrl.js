import { config } from '../config'
import { combineUrl } from '../util/combineUrl'

export const getApiUrl = url => {
  return combineUrl(config.API_URL, url)
}
