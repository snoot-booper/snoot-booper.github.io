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
    voggel: "Kerkuil",
    queryOptions: kerkuilOptions,
  },
  {
    voggel: "Slechtvalk",
    queryOptions: slechtvalkOptions,
  },
  {
    voggel: "Bosuil",
    queryOptions: bosuilOptions,
  },
  {
    voggel: "Torenvalk",
    queryOptions: torenvalkOptions,
  },
  {
    voggel: "Visarend",
    queryOptions: visarendOptions,
  },
  {
    voggel: "Boerenlandvogels",
    queryOptions: boerenlandvogelsOptions,
  },
  {
    voggel: "Zeearend",
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
    voggel: "Steenuil",
    queryOptions: steenuilOptions,
  },
  {
    voggel: "Vijver",
    queryOptions: vijverOptions,
  },
];
