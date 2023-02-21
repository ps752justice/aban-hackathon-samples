import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ILanguage } from "../../services/models/language-response";

import { IEventResponse } from "../../services/models/events-response";
import { getEventsService } from "../../services/events-service";
import {
    getEvents,
    getEventsError,
    getEventsSuccess,
    setSelectedEvent,
    setSelectedEventSuccess,
} from "./slice";

export function* getEventsHandler(action: PayloadAction<ILanguage>) {
    try {
        const response: IEventResponse[] = yield call(
            getEventsService,
            action.payload
        );
        yield put(getEventsSuccess(response));
    } catch (ex) {
        put(getEventsError());
    }
}

export function* setSelectedEventHandler(
    action: PayloadAction<IEventResponse>
) {
    try {
        yield put(setSelectedEventSuccess(action.payload));
    } catch (ex) {
        put(getEventsError());
    }
}

export const sagas = [
    takeLatest(getEvents, getEventsHandler),
    takeLatest(setSelectedEvent, setSelectedEventHandler),
];
