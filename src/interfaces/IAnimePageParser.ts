import Anime from "../utils/Anime/Anime";

export default interface IAnimePageParser {
    name: string;
    searchAnime: (name: string) => Promise<Anime>;
};