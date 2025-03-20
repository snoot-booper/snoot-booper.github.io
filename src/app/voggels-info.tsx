"use client";

import { Voggel } from "@/components/voggel";
import { streams } from "@/config/streams";

export function VoggelsInfo() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,var(--container-2xl))] gap-4 max-w-full">
      {streams?.map((stream, index) => (
        <Voggel
          key={index}
          voggel={stream.voggel}
          queryOptions={stream.queryOptions}
        />
      ))}
    </section>
  );
}
