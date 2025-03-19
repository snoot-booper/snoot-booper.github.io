import { queryOptions } from '@tanstack/react-query'

export const visarendOptions = queryOptions({
  queryKey: ['visarend'],
  queryFn: async () => {
    const response = await fetch('https://www.vogelbescherming.nl/beleefdelente/visarend')
    return response.text()
  },
})
