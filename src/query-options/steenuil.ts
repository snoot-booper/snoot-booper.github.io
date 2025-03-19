import { queryOptions } from '@tanstack/react-query'

export const steenuilOptions = queryOptions({
  queryKey: ['steenuil'],
  queryFn: async () => {
    const response = await fetch('https://www.vogelbescherming.nl/beleefdelente/steenuil')
    return response.text()
  },
})
