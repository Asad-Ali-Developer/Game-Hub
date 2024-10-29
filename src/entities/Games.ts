import { Platform } from "./Platform";

export interface Games {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    description_raw: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
}
