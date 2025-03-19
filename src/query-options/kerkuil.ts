import { queryOptions } from "@tanstack/react-query";

export const kerkuilOptions = queryOptions({
  queryKey: ["kerkuil"],
  queryFn: async () => {
    const response = await fetch(
      "https://www.vogelbescherming.nl/beleefdelente/kerkuil"
    );
    return response.text();
  },
});
