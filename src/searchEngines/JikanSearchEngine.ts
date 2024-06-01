import ISearchEngine from "../interfaces/ISearchEngine";
import Anime from "../utils/Anime/Anime";
import { Languages } from "../utils/Languages";

export default class JikanSearchEngine implements ISearchEngine {
    name: string = "Jikan (MyAnimeList)";
    language: Languages = Languages.EN;
    async searchAnime(name: string): Promise<Anime[]> {
        throw new Error("Method not implemented.");
    };
}