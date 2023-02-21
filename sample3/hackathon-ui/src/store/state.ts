import { IEventResponse } from "../services/models/events-response";
import { IAbanState } from "./aban/slice";
import { IEventsState } from "./events/slice";
import { ILanguageState } from "./language/slice";
import { IPingState } from "./ping-server/slice";
import { ISearchState } from "./search/slice";
import { ISummaryState } from "./summary/slice";
import { ICollectionState } from "./collection/slice";
import { getCollectionInitialState } from "../services/collection-service";

export interface IStoreState {
    pingServer: IPingState;
    summary: ISummaryState;
    language: ILanguageState;
    events: IEventsState;
    search: ISearchState;
    collections: ICollectionState;
    aban: IAbanState;
}

export const initialState: IStoreState = {
    pingServer: {
        pingResponse: "No Ping",
        isLoading: false,
        error: false,
    },
    summary: {
        summary: null,
        isLoading: false,
        error: false,
    },
    language: {
        language: {
            code: "fa",
            abbr: "فا",
            title: "فارسی",
            isRtl: true,
        },
        languages: [],
        isLoading: false,
        error: false,
        changing: false,
    },
    events: {
        changing: false,
        selectedEvent: null,
        events: [],
        isLoading: false,
        error: false,
    },
    search: {
        search: "",
        isLoading: false,
        error: false,
    },
    collections: {
        collections: getCollectionInitialState(),
        isLoading: false,
        error: false,
    },
    aban: {
        isLoading: false,
        error: false,
        deathReport: null,
    },
};
