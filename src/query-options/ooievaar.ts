import { queryOptions } from '@tanstack/react-query'

export const ooievaarOptions = queryOptions({
  queryKey: ['ooievaar'],
  queryFn: async () => {
    const response = await fetch('https://www.vogelbescherming.nl/beleefdelente/ooievaar')
    return response.text()
  },
})
