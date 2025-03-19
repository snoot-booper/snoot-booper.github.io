import { queryOptions } from "@tanstack/react-query";

export const zeearendOptions = queryOptions({
  queryKey: ["zeearend"],
  queryFn: async () => {
    const response = await fetch(
      "https://www.vogelbescherming.nl/beleefdelente/zeearend"
    );
    return response.text();
  },
});
