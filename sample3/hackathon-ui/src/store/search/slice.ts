import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../state";
import { ISearchResponse } from "../../services/models/search-response";
import { ILanguage } from "../../services/models/language-response";

export interface ISearchState {
    isLoading: boolean;
    error: boolean;
    search: string;
}

const searchSlice = createSlice({
    name: "@@rs/Search",
    initialState: initialState.search,
    reducers: {
        getSearch(state, _: PayloadAction<ILanguage>) {
            state.error = false;
            state.isLoading = true;
            state.search = "";
        },
        getSearchSuccess(state, action: PayloadAction<ISearchResponse>) {
            state.error = false;
            state.isLoading = false;
            state.search = action.payload?.title ?? "";
        },
        getSearchError(state) {
            state.isLoading = false;
            state.error = true;
            state.search = "";
        },
    },
});

export const { getSearch, getSearchSuccess, getSearchError } =
    searchSlice.actions;
export default searchSlice.reducer;
