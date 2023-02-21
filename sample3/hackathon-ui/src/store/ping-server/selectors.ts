import { createSelector } from "reselect";
import { IStoreState } from "../state";
import { IPingState } from "./slice";

export const getServerPingResponseSelector = createSelector(
    (state: IStoreState): IPingState => {
        return state.pingServer;
    },
    (x: IPingState) => {
        return x.pingResponse;
    }
);

export const getServerPingStateSelector = createSelector(
    (state: IStoreState): IPingState => {
        return state.pingServer;
    },
    (x: IPingState) => {
        return {
            error: x.error,
            isLoading: x.isLoading,
        };
    }
);
