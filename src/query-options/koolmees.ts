import { queryOptions } from "@tanstack/react-query";

export const koolmeesOptions = queryOptions({
  queryKey: ["koolmees"],
  queryFn: async () => {
    const response = await fetch(
      "https://www.vogelbescherming.nl/beleefdelente/koolmees"
    );
    return response.text();
  },
});
