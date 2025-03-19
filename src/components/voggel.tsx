'use client'

import { extractCamsData } from '@/utils/extract-cams-data';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
type VoggelProps = {
  queryOptions: unknown;
}
export function Voggel({queryOptions}: VoggelProps) {
  const { data, isLoading } = useQuery(queryOptions as UseQueryOptions<unknown, Error, unknown, readonly unknown[]>);

  if (isLoading) {
    return null;
  }

  console.log(data);

    const camsData = extractCamsData(data);

    console.log(camsData);

return (
    <>
    {camsData?.map((cam) => (
        <article className="p-4 w-2xl max-w-full aspect-[1170/630] relative" key={cam.id}>
        <h2 className="text-lg absolute top-4 left-4 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] text-primary">{cam.naam}</h2>
        <iframe className="w-full h-full"  src={cam.file} seamless allowFullScreen allow="autoplay"></iframe>
    </article>
            ))}
    </>
)
}
