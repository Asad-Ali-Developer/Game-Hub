import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Games {
    id: number;
    slug: string;
    name: string;
    genres: Genre[]
    publishers: Publisher[]
    background_image: string;
    description_raw: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
}
