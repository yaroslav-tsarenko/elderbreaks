import player1 from "../../public/player8.png";
import player2 from "../../public/player5.png";
import player3 from "../../public/player7.png";
import { LeaderboardHistoryItemProps } from "@/types/leaderboardHistoryItem";

export const leaderboardHistoryItems: LeaderboardHistoryItemProps[] = [
    {
        nickname: "johnnn",
        leaderboard: "ROOBET",
        started: "01 Jan 2024",
        finished: "01 Feb 2024",
        totalPool: 500,
        place: 2,
        avatar: player1,
        category: "Category1",
        endDate: "01 Feb 2024",
        prize: "$100",
        username: "johnnn",
        rank: 2,
        startDate: "01 Jan 2024"
    },
    {
        nickname: "soldieee",
        leaderboard: "CSGOROLL",
        started: "01 Nov 2024",
        finished: "01 Nov 2024",
        totalPool: 3507,
        place: 1,
        avatar: player2,
        category: "Category2",
        endDate: "01 Nov 2024",
        prize: "$200",
        username: "soldieee",
        rank: 1,
        startDate: "01 Nov 2024"
    },
    {
        nickname: "PLAYBOY_CARTI",
        leaderboard: "CSGOEMPIRE",
        started: "01 Sep 2024",
        finished: "01 Nov 2024",
        totalPool: 1572,
        place: 3,
        avatar: player3,
        category: "Category3",
        endDate: "01 Nov 2024",
        prize: "$150",
        username: "PLAYBOY_CARTI",
        rank: 3,
        startDate: "01 Sep 2024"
    },
];