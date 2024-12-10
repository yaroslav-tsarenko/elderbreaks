import {StaticImageData} from "next/image";

export interface StatItemProps{
    value: number;
    image: StaticImageData;
    description: string;
}