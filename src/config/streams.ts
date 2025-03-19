import { boerenlandvogelsOptions } from "@/query-options/boerenlandvogels";
import { bosuilOptions } from "@/query-options/bosuil";
import { kerkuilOptions } from "@/query-options/kerkuil";
import { slechtvalkOptions } from "@/query-options/slechtvalk";
import { steenuilOptions } from "@/query-options/steenuil";
import { torenvalkOptions } from "@/query-options/torenvalk";
import { vijverOptions } from "@/query-options/vijver";
import { visarendOptions } from "@/query-options/visarend";
import { zeearendOptions } from "@/query-options/zeearend";

export const streams = [
  {
    queryOptions: kerkuilOptions,
  },
  {
    queryOptions: slechtvalkOptions,
  },
  {
    queryOptions: bosuilOptions,
  },
  {
    queryOptions: torenvalkOptions,
  },
  {
    queryOptions: visarendOptions,
  },
  {
    queryOptions: boerenlandvogelsOptions,
  },
  {
    queryOptions: zeearendOptions,
  },
  // {
  //     queryOptions: ooievaarOptions,
  // },
  // {

  //     queryOptions: koolmeesOptions,
  // },
  // {
  //     queryOptions: merelOptions,
  // },
  {
    queryOptions: steenuilOptions,
  },
  {
    queryOptions: vijverOptions,
  },
];
