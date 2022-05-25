export const combineUrl = (...params) => {
  return `${params.join('/')}`.replace(/\/{2,}/g, '/').replace(':/', '://')
}
