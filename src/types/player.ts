import {StaticImageData} from "next/image";

export interface PlayerFrameProps {
    nickname: string;
    xp: number;
    money: string;
    avatar: StaticImageData | string;
    place: number;
    category: string;
}