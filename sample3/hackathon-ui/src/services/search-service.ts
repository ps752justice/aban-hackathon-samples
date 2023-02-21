import { ILanguage } from "./models/language-response";
import { ISearchResponse } from "./models/search-response";

export const getSearchService = async (
    language: ILanguage
): Promise<ISearchResponse> => {
    let ret = {
        title: "Search by name, city, ...",
    } as ISearchResponse;
    if (language.code === "fa") {
        ret = {
            title: "جستجو براساس نام، شهر و ...",
        } as ISearchResponse;
    }
    return Promise.resolve(ret);
};
