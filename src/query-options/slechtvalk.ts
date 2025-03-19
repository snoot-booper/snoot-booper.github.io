import { queryOptions } from '@tanstack/react-query'

export const slechtvalkOptions = queryOptions({
  queryKey: ['slechtvalk'],
  queryFn: async () => {
    const response = await fetch('https://www.vogelbescherming.nl/beleefdelente/slechtvalk')
    return response.text()
  },
})
