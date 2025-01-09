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
    category?: string;
}

export const sliderImages: SliderImage[] = [
    {
        id: 1,
        src: roobet.src,
        alt: "RoobetLeaderboard",
        category: "Roobet"
    }, {
        id: 2,
        src: empireDrop.src,
        alt: "EmpireDropLeaderboard",
        category: "EmpireDrop"
    },
    {
        id: 3,
        src: csgobigWager.src,
        alt: "CsgobigLeaderboard",
        category: "CSGOBIG"
    },
    {
        id: 4,
        src: csgobig.src,
        alt: "CsgobigDepositLeaderboard",
        category: "CSGOBIG-DEPOSIT"

    },
    {
        id: 4,
        src: rain.src,
        alt: "RainLeaderboard",
        category: "Rain"
    },
    {
        id: 5,
        src: gpoints.src,
        alt: "DuelGpLeaderboard",
        category: "DuelGP"
    },
    {
        id: 6,
        src: csgostake.src,
        alt: "CsgostakeLeaderboard",
        category: "Csgostake"
    },
    {
        id: 7,
        src: csgoroll.src,
        alt: "CsgorollLeaderboard",
        category: "Csgoroll"
    }
];