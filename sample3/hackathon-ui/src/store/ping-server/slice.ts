import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPingResponse } from "../../services/models/ping-response";
import { initialState } from "../state";

export interface IPingState {
    isLoading: boolean;
    error: boolean;
    pingResponse: string;
}

const pingServerSlice = createSlice({
    name: "@@rs/PING_SERVER",
    initialState: initialState.pingServer,
    reducers: {
        pingServer(state) {
            state.pingResponse = "Pinging";
            state.error = false;
            state.isLoading = true;
        },
        pingServerSuccess(state, action: PayloadAction<IPingResponse>) {
            state.pingResponse = action.payload?.response ?? "";
            state.error = false;
            state.isLoading = false;
        },
        pingServerError(state) {
            state.isLoading = false;
            state.error = true;
            state.pingResponse = "";
        },
    },
});

export const { pingServer, pingServerSuccess, pingServerError } =
    pingServerSlice.actions;
export default pingServerSlice.reducer;
