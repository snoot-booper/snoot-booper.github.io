import { queryOptions } from '@tanstack/react-query'

export const bosuilOptions = queryOptions({
  queryKey: ['bosuil'],
  queryFn: async () => {
    const response = await fetch('https://www.vogelbescherming.nl/beleefdelente/bosuil')
    return response.text()
  },
})
