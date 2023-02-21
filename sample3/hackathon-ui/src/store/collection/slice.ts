import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../state";
import { ICollectionResponse } from "../../services/models/collections-response";
import { ILanguage } from "../../services/models/language-response";
import { IEventResponse } from "../../services/models/events-response";
import { getCollectionInitialState } from "../../services/collection-service";

export interface ICollectionState {
    collections: ICollectionResponse;
    isLoading: boolean;
    error: boolean;
}

export interface IGetCollectionsInput {
    language: ILanguage;
    event: IEventResponse;
}

const summarySlice = createSlice({
    name: "@@rs/Collections",
    initialState: initialState.collections,
    reducers: {
        getCollections(state, action: PayloadAction<IGetCollectionsInput>) {
            state.collections = getCollectionInitialState(
                action.payload.language.code
            );
            state.error = false;
            state.isLoading = true;
        },
        getCollectionsSuccess(
            state,
            action: PayloadAction<ICollectionResponse>
        ) {
            state.collections = action.payload;
            state.error = false;
            state.isLoading = false;
        },
        getCollectionsError(state) {
            state.collections = getCollectionInitialState();
            state.isLoading = false;
            state.error = true;
        },
    },
});

export const { getCollections, getCollectionsSuccess, getCollectionsError } =
    summarySlice.actions;
export default summarySlice.reducer;
