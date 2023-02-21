import { createSelector } from "reselect";
import { IStoreState } from "../state";
import { ISearchState } from "./slice";

export const getSearchSelector = createSelector(
    (state: IStoreState): ISearchState => {
        return state.search;
    },
    (x: ISearchState) => {
        return x.search;
    }
);

export const getSearchStateSelector = createSelector(
    (state: IStoreState): ISearchState => {
        return state.search;
    },
    (x: ISearchState) => {
        return {
            error: x.error,
            isLoading: x.isLoading,
        };
    }
);
