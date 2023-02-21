import { ILanguage } from "./models/language-response";
import { ICollectionResponse } from "./models/collections-response";
import { IEventResponse } from "./models/events-response";

// TODO...
export const getCollectionsService = async (
    language: ILanguage,
    event: IEventResponse
): Promise<ICollectionResponse> => {
    let ret: ICollectionResponse = {
        title: getCollectionsTitle(language.code),
        items: [
            {
                src: "example.com/general/315324436_154555003601701_3249105260056641786_n.jpeg",
                alt: "string",
            },
            ...
        ],
    };
    return Promise.resolve(ret);
};

export const getCollectionInitialState = (
    languageCode = "en"
): ICollectionResponse => {
    return {
        title: getCollectionsTitle(languageCode),
        items: [],
    };
};

export const getCollectionsTitle = (languageCode: string): string => {
    return languageCode === "fa" ? "گالری" : "Gallery";
};
