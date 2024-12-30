import csgobig from "../../public/csgobig-deposit.png";
import csgobigWager from "../../public/csgo-big-wager.png";
import roobet from "../../public/roobet.png";
import empireDrop from "../../public/empiredrop.png";
import gpoints from "../../public/duelgp.png";
import rain from "../../public/rain.png";
import csgostake from "../../public/csgostake.png";
import csgoroll from "../../public/csgoroll-logo.png";

interface SliderImage {
    id: number;
    src: string;
    alt: string;
}

export const sliderImages: SliderImage[] = [
    {
        id: 1,
        src: roobet.src,
        alt: "RoobetLeaderboard"
    }, {
        id: 2,
        src: empireDrop.src,
        alt: "EmpireDropLeaderboard"
    },
    {
        id: 3,
        src: csgobigWager.src,
        alt: "CsgobigLeaderboard"
    },
    {
        id: 4,
        src: csgobig.src,
        alt: "CsgobigDepositLeaderboard"
    },
    {
        id: 4,
        src: rain.src,
        alt: "RainLeaderboard"
    },
    {
        id: 5,
        src: gpoints.src,
        alt: "DuelGpLeaderboard"
    },
    {
        id: 6,
        src: csgostake.src,
        alt: "CsgostakeLeaderboard"
    },
    {
        id: 7,
        src: csgoroll.src,
        alt: "CsgorollLeaderboard"
    }
];