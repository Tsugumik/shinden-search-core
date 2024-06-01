import ISearchEngine from "../interfaces/ISearchEngine";
import Anime from "../utils/Anime/Anime";
import { Languages } from "../utils/Languages";

export default class ShindenPlSearchEngine implements ISearchEngine {
    name: string = "Shinden.pl";
    language: Languages = Languages.PL;
    async searchAnime(name: string): Promise<Anime[]> {
        throw new Error("Method not implemented.");
    };
}