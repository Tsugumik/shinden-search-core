import Episode from "./Anime/Episode";

/**
 * Represents a video player for streaming anime episodes.
 * It contains information about the provider, player URL,
 * and the associated episode.
 */
export default class Player {
    /** The provider of the video player, e.g., YouTube, GoogleDrive. */
    provider: string;

    /** The URL of the video player. */
    playerUrl: string;

    /** The episode associated with this player. */
    episode: Episode;

    /**
     * @param {string} _provider - The provider of the video player.
     * @param {string} _playerUrl - The URL of the video player.
     * @param {Episode} _episode - The episode associated with this player.
     */
    constructor(_provider, _playerUrl, _episode) {
        this.provider = _provider;
        this.playerUrl = _playerUrl;
        this.episode = _episode;
    }
}