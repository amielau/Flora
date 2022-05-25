export const resolveResponse = response => {
  return response.status === 204 ? Promise.resolve('') : response.json()
}
