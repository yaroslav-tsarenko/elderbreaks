import {StaticImageData} from "next/image";

export interface HighlightedVideoProps{
    nickname: string;
    description: string;
    hashTags: string[];
    videoUrl: string;
    coverImage: StaticImageData;
    avatar: StaticImageData;
}