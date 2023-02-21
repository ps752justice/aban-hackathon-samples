import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPingResponse } from "../../services/models/ping-response";
import { initialState } from "../state";
import { ISummaryResponse } from "../../services/models/summary-response";
import { ILanguage } from "../../services/models/language-response";
import { IEventResponse } from "../../services/models/events-response";

export interface ISummaryState {
    isLoading: boolean;
    error: boolean;
    summary: ISummaryResponse | null;
}

export interface IGetSummaryInput {
    language: ILanguage;
    event: IEventResponse;
}
const summarySlice = createSlice({
    name: "@@rs/Summary",
    initialState: initialState.summary,
    reducers: {
        getSummary(state, _: PayloadAction<IGetSummaryInput>) {
            state.summary = null;
            state.error = false;
            state.isLoading = true;
        },
        getSummarySuccess(state, action: PayloadAction<ISummaryResponse>) {
            state.summary = action.payload;
            state.error = false;
            state.isLoading = false;
        },
        getSummaryError(state) {
            state.isLoading = false;
            state.error = true;
            state.summary = null;
        },
    },
});

export const { getSummary, getSummarySuccess, getSummaryError } =
    summarySlice.actions;
export default summarySlice.reducer;
