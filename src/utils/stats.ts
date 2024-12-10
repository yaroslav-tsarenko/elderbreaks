import guns from "../../public/assets/images/guns.svg";
import cases from "../../public/assets/images/case.svg";
import ticket from "../../public/assets/images/ticket.svg";
import {StatItemProps} from "@/types/statItem";


export const stats: StatItemProps[] = [
    {
        image: guns,
        value: 55128.05,
        description: "Total value of unboxed items from 1584 free battles",
    },
    {
        image: cases,
        value: 6180,
        description: "4575 gems, 1300 coins, 305$ given away live to viewers through our drop system",
    },
    {
        image: ticket,
        value: 400,
        description: "gems in free battles and promo codes given away on discord every day",
    },

]