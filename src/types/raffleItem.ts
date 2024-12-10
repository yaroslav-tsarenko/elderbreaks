import {StaticImageData} from "next/image";

export interface RaffleItemProps{
    data: string,
    title: string,
    lot: string,
    image: StaticImageData,
    type?: string,
    winnerName?: string,
    winnerAvatar?: StaticImageData,
}