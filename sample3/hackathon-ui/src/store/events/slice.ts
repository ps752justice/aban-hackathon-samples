import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../state";
import { IEventResponse } from "../../services/models/events-response";
import { ILanguage } from "../../services/models/language-response";

export interface IEventsState {
    isLoading: boolean;
    error: boolean;
    selectedEvent: IEventResponse | null;
    changing: boolean;
    events: IEventResponse[];
}

const eventsSlice = createSlice({
    name: "@@rs/Events",
    initialState: initialState.events,
    reducers: {
        getEvents(state, _: PayloadAction<ILanguage>) {
            state.error = false;
            state.isLoading = true;
            state.events = [];
        },
        getEventsSuccess(state, action: PayloadAction<IEventResponse[]>) {
            state.error = false;
            state.isLoading = false;
            state.events = action.payload;
        },
        getEventsError(state) {
            state.isLoading = false;
            state.error = true;
            state.events = [];
        },
        setSelectedEvent(state, _: PayloadAction<IEventResponse>) {
            state.changing = true;
        },
        setSelectedEventSuccess(state, action: PayloadAction<IEventResponse>) {
            state.changing = false;
            state.selectedEvent = action.payload;
        },
    },
});

export const {
    getEvents,
    getEventsSuccess,
    getEventsError,
    setSelectedEvent,
    setSelectedEventSuccess,
} = eventsSlice.actions;
export default eventsSlice.reducer;
