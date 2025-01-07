import { FaTrophy, FaVideo, FaGift, FaTicketAlt, FaStore } from 'react-icons/fa';
import {LAST_VIDEO, YOUTUBE_SHORTS} from "@/constants/url";
import { IoDiamond } from "react-icons/io5";
import { GiDuel } from "react-icons/gi";
const getRandomVideoLink = () => {
    const links = [YOUTUBE_SHORTS, YOUTUBE_SHORTS, YOUTUBE_SHORTS, YOUTUBE_SHORTS, LAST_VIDEO];
    return links[Math.floor(Math.random() * links.length)];
};

export const links = [
    {
        title: 'Leaderboards',
        icon: FaTrophy,
        link: '/leaderboards',
    },
    {
        title: 'Last Video',
        icon: FaVideo,
        link: getRandomVideoLink(),
        target: '_blank',
    },
    {
        title: 'Vip Rewards',
        icon: IoDiamond,
        link: '/vip-rewards',
    },
    {
        title: 'Challenges',
        icon: GiDuel,
        link: '/challenges',
    },
    {
        title: 'All Bonuses',
        icon: FaGift,
        link: '/all-bonuses',
    },
    {
        title: 'Raffles',
        icon: FaTicketAlt,
        link: '/raffles',
    },
    {
        title: 'Point Shop',
        icon: FaStore,
        link: '/points-shop',
    },
];