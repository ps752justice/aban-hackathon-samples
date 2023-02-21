import { createSelector } from "reselect";
import { IStoreState } from "../state";
import { ICollectionState } from "./slice";

export const getCollectionsSelector = createSelector(
    (state: IStoreState): ICollectionState => {
        return state.collections;
    },
    (x: ICollectionState) => {
        return x.collections;
    }
);

export const getCollectionsStateSelector = createSelector(
    (state: IStoreState): ICollectionState => {
        return state.collections;
    },
    (x: ICollectionState) => {
        return {
            error: x.error,
            isLoading: x.isLoading,
        };
    }
);
