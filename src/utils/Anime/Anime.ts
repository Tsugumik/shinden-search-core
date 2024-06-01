import Episode from "./Episode";

export default class Anime {
    name: "string";
    rating: number | null;
    max_rating: number | null;
    description: string | null;
    thumbImageUrl: string | null;
    episodes: Array<Episode>;
}