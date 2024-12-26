export interface Player {
    _id: string;
    userId: string;
    username: string;
    wagered: number;
    prize: number;
    category: string;
    startDate: string;
    endDate: string;
    __v: number;
    nickname: string;
    xp: number;
    money: string;
    place: number;
    avatar: string | null;
}