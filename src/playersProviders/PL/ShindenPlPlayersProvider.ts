import IPlayersProvider from "../../interfaces/IPlayersProvider";
import Anime from "../../utils/Anime/Anime";
import Episode from "../../utils/Anime/Episode";
import { Languages } from "../../utils/Languages";
import Player from "../../utils/Player";

export default class ShindenPlPlayersProvider implements IPlayersProvider {
    name: string = "Shinden.pl";
    details: string = "Popular polish anime site";
    language: Languages = Languages.PL;

    async getPlayersForAnimeEpisode(anime: Anime, episode: Episode): Promise<Player[]> {
        throw new Error("Method not implemented.");
    }
}