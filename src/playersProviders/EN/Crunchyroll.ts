import IPlayersProvider from "../../interfaces/IPlayersProvider";
import Anime from "../../utils/Anime/Anime";
import Episode from "../../utils/Anime/Episode";
import { Languages } from "../../utils/Languages";
import Player from "../../utils/Player";

export default class Crunchyroll implements IPlayersProvider {
    name: string = "crunchyroll.com";
    details: string = "Impressive anime streaming service";
    language: Languages = Languages.EN;
    
    async getPlayersForAnimeEpisode(anime: Anime, episode: Episode): Promise<Player[]> {
        throw new Error("Method not implemented.");
    }
}