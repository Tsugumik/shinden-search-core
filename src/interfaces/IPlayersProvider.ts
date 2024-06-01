import Anime from "../utils/Anime/Anime";
import Episode from "../utils/Anime/Episode";
import { Languages } from "../utils/Languages";
import Player from "../utils/Player";

export default interface IPlayersProvider {
    /** The name of the provider. */
    name: string;

    /** Additional details about the provider. */
    details: string;

    /** The language supported by the players provider. */
    language: Languages;

    /**
     * Retrieves players for a specific anime episode.
     * @param anime - The anime for which to retrieve players.
     * @param episode - The episode of the anime for which to retrieve players.
     * @returns A promise that resolves to an array of Player objects.
     */
    getPlayersForAnimeEpisode(anime: Anime, episode: Episode): Promise<Array<Player>>;
};