import { StaticImageData } from 'next/image';

export interface PlayerFrameProps {
    nickname: string;
    xp: string;
    money: string;
    avatar: StaticImageData;
    place: number;
}