import { StaticImageData } from 'next/image';

export type Player = {
    nickname: string;
    xp: string;
    money: string;
    avatar: StaticImageData;
    place: number;
};

export type PlayerFrameProps = Player;