import { queryOptions } from '@tanstack/react-query'

export const boerenlandvogelsOptions = queryOptions({
  queryKey: ['boerenlandvogels'],
  queryFn: async () => {
    const response = await fetch('https://www.vogelbescherming.nl/beleefdelente/boerenlandvogels')
    return response.text()
  },
})
