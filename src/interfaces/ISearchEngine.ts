import Anime from "../utils/Anime/Anime";
import { Languages } from "../utils/Languages";

/**
 * ISearchEngine defines the interface for anime search engines.
 * It provides functionality to search for anime and retrieve 
 * relevant details including an image, name, description, 
 * list of episodes, and rating. 
 */
export default interface ISearchEngine {
    /** The name of the search engine. */
    name: string;

    /** The language supported by the search engine. */
    language: Languages;

    /**
     * Searches for anime by name.
     * @param name - The name of the anime to search for.
     * @returns A promise that resolves to an array of Anime objects.
     */
    searchAnime: (name: string) => Promise<Array<Anime>>
};