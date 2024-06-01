import ISearchEngine from "./interfaces/ISearchEngine";
import JikanSearchEngine from "./searchEngines/JikanSearchEngine";
import { Languages } from "./utils/Languages";

export class ShindenSearchCore {
    metadataProvider: ISearchEngine = new JikanSearchEngine();
    metadataLanguage: Languages;
    // TODO: A lot ＼(ﾟｰﾟ＼)
    constructor(_metadataProvider: ISearchEngine) {
        this.metadataProvider = _metadataProvider;
        this.metadataLanguage = this.metadataProvider.language;
    }
};