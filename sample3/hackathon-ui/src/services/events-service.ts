import { ILanguage } from "./models/language-response";
import { IEventResponse } from "./models/events-response";

export const getEventsService = async (
    language: ILanguage
): Promise<IEventResponse[]> => {
    let ret = [
        {
            id: "1",
            title: "Nov 2019",
            route: "/bloody-aban",
        },
        {
            id: "2",
            title: "PS752 Flight",
            route: "/ps752-flight",
        },
        {
            id: "3",
            title: "Nov 2022",
            route: "/revolution-1401",
        },
    ] as IEventResponse[];
    if (language.code === "fa") {
        ret = [
            {
                id: "1",
                title: "آبان ۹۸",
                route: "/bloody-aban",
            },
            {
                id: "2",
                title: "پرواز ۷۵۲",
                route: "/ps752-flight",
            },
            {
                id: "3",
                title: "آبان ۱۴۰۱",
                route: "/revolution-1401",
            },
        ] as IEventResponse[];
    }
    return Promise.resolve(ret);
};
