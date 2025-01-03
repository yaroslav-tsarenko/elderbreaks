import { FaTrophy, FaVideo, FaCalendarAlt, FaGift, FaTicketAlt, FaStore } from 'react-icons/fa';
import {LAST_VIDEO} from "@/constants/url";
import { IoDiamond } from "react-icons/io5";
export const links = [
    {
        title: 'Leaderboards',
        icon: FaTrophy,
        link: '/leaderboards',
    },
    {
        title: 'Last Video',
        icon: FaVideo,
        link: LAST_VIDEO,
        target: '_blank',
    },
    {
        title: 'Vip Rewards',
        icon: IoDiamond,
        link: '/vip-rewards',
    },
    {
        title: 'Calendar',
        icon: FaCalendarAlt,
        link: '/advent-calendar',
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