import { bosuilOptions } from "@/query-options/bosuil";
import { kerkuilOptions } from "@/query-options/kerkuil";
import { slechtvalkOptions } from "@/query-options/slechtvalk";
export const streams = [
    {
    name: 'Kerkuil binnen',
    file: 'Kerkuil1',
    queryOptions: kerkuilOptions,
    },
    {
        name: 'Bosuil',
        file: 'Bosuil2',
        queryOptions: bosuilOptions,
    },
    {
        name: 'Slechtvalk',
        file: 'SlechtvalkGemert3',
        queryOptions: slechtvalkOptions,
    },
    // {
    //     name: 'Kerkuil buiten',
    //     file: 'Kerkuil2',
    // },
    // {
    //     name: 'Kerkuil buiten 2',
    //     file: 'Kerkuil3',
    // },
]
