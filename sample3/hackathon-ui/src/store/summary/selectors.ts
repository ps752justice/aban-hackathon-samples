import { createSelector } from "reselect";
import { IStoreState } from "../state";
import { ISummaryState } from "./slice";

export const getSummarySelector = createSelector(
    (state: IStoreState): ISummaryState => {
        return state.summary;
    },
    (x: ISummaryState) => {
        return x.summary;
    }
);

export const getSummaryStateSelector = createSelector(
    (state: IStoreState): ISummaryState => {
        return state.summary;
    },
    (x: ISummaryState) => {
        return {
            error: x.error,
            isLoading: x.isLoading,
        };
    }
);
