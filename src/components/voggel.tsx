'use client'

import { extractToken } from '@/utils/extract-token';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
type VoggelProps = {
  name: string;
  file: string;
  queryOptions: unknown;
}
export function Voggel({ name, file, queryOptions}: VoggelProps) {
  const { data, isLoading } = useQuery(queryOptions as UseQueryOptions<unknown, Error, unknown, readonly unknown[]>);

  if (isLoading) {
    return null;
  }

  const token = extractToken(data as string)

  return (
    <article className="p-4 w-2xl max-w-full aspect-[1170/630] relative">
        <h2 className="text-lg absolute top-4 left-4 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] text-primary">{name}</h2>
        <iframe className="w-full h-full" key={name} src={`//rrr.sz.xlcdn.com/?account=bdl&file=${file}&type=live&service=wowza&output=player&autostart=1&token=${token}`} seamless allowFullScreen allow="autoplay"></iframe>
    </article>
  )
}
