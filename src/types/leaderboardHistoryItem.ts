import {StaticImageData} from "next/image";

export interface LeaderboardHistoryItemProps{
    nickname: string;
    leaderboard: string;
    started: string;
    finished: string;
    totalPool: number;
    place: number;
    avatar: StaticImageData;
}