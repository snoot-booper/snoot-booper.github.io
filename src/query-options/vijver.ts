import { queryOptions } from "@tanstack/react-query";

export const vijverOptions = queryOptions({
  queryKey: ["vijver"],
  queryFn: async () => {
    const response = await fetch(
      "https://www.vogelbescherming.nl/beleefdelente/vijver"
    );
    return response.text();
  },
});
