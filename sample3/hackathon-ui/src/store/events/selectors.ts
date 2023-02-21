import { createSelector } from "reselect";
import { IStoreState } from "../state";
import { IEventsState } from "./slice";

export const getEventsSelector = createSelector(
    (state: IStoreState): IEventsState => {
        return state.events;
    },
    (x: IEventsState) => {
        return x.events;
    }
);

export const getEventsStateSelector = createSelector(
    (state: IStoreState): IEventsState => {
        return state.events;
    },
    (x: IEventsState) => {
        return {
            error: x.error,
            isLoading: x.isLoading,
        };
    }
);

export const getSelectedEventSelector = createSelector(
    (state: IStoreState): IEventsState => {
        return state.events;
    },
    (x: IEventsState) => {
        return x.selectedEvent;
    }
);
