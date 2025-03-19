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
    name: 'Kerkuil binnen',
    file: 'Kerkuil1',
    queryOptions: kerkuilOptions,
    },
    {
        name: 'Slechtvalk',
        file: 'SlechtvalkGemert3',
        queryOptions: slechtvalkOptions,
    },
    {
        name: 'Bosuil',
        file: 'Bosuil2',
        queryOptions: bosuilOptions,
    },
    {
        name: 'Torenvalk',
        file: 'Torenvalk1',
        queryOptions: torenvalkOptions,
    },
    {
        name: 'Visarend',
        file: 'Visarend1',
        queryOptions: visarendOptions,
    },
    {
        name: 'Boerenlandvogels',
        file: 'Boerenlandvogels1',
        queryOptions: boerenlandvogelsOptions,
    },
    {
        name: 'Zeearend',
        file: 'Zeearend1',
        queryOptions: zeearendOptions,
    },
    // {
    //     name: 'Ooievaar',
    //     file: 'Ooievaar1',
    //     queryOptions: ooievaarOptions,
    // },
    // {
    //     name: 'Koolmees',
    //     file: 'Koolmees1',
    //     queryOptions: koolmeesOptions,
    // },
    // {
    //     name: 'Merel',
    //     file: 'Merel1',
    //     queryOptions: merelOptions,
    // },
    {
        name: 'Steenuil',
        file: 'Steenuil3',
        queryOptions: steenuilOptions,
    },
    {
        name: 'Vijver',
        file: 'Vijver1',
        queryOptions: vijverOptions,
    },
]
