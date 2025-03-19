import { queryOptions } from '@tanstack/react-query'

export const torenvalkOptions = queryOptions({
  queryKey: ['torenvalk'],
  queryFn: async () => {
    const response = await fetch('https://www.vogelbescherming.nl/beleefdelente/torenvalk')
    return response.text()
  },
})
