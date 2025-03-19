import { queryOptions } from "@tanstack/react-query";

export const merelOptions = queryOptions({
  queryKey: ["merel"],
  queryFn: async () => {
    const response = await fetch(
      "https://www.vogelbescherming.nl/beleefdelente/merel"
    );
    return response.text();
  },
});
