import { StaticImageData } from "next/image";

export interface LeaderboardHistoryItemProps {
    nickname: string;
    leaderboard: string;
    started: string;
    totalPool: number | string;
    category: string;
    place: number;
    endDate: number | string;
    prize: string;
    finished: string;
    avatar: StaticImageData | string;
    username: string;
    rank: number;
    startDate: string;
}