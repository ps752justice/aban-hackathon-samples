import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDeathResponse } from "../../services/models/aban-response";
import { initialState } from "../state";

export interface IAbanState {
    isLoading: boolean;
    error: boolean;
    deathReport: IDeathResponse | null;
}
export interface IGetAbanDeathReportInput {
    searchToken: string;
    languageCode: string;
}

const abanSlice = createSlice({
    name: "@@rs/aban",
    initialState: initialState.aban,
    reducers: {
        getAbanDeathReport(
            state,
            action: PayloadAction<IGetAbanDeathReportInput>
        ) {
            state.deathReport = null;
            state.error = false;
            state.isLoading = true;
        },
        getAbanDeathReportSuccess(
            state,
            action: PayloadAction<IDeathResponse>
        ) {
            state.deathReport = action.payload;
            state.error = false;
            state.isLoading = false;
        },
        getAbanDeathReportError(state) {
            state.isLoading = false;
            state.error = true;
            state.deathReport = null;
        },
    },
});

export const {
    getAbanDeathReport,
    getAbanDeathReportSuccess,
    getAbanDeathReportError,
} = abanSlice.actions;
export default abanSlice.reducer;
