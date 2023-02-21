import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ILanguage } from "../../services/models/language-response";

import { ISummaryResponse } from "../../services/models/summary-response";
import { getSummaryService } from "../../services/summary-service";
import {
    getSummary,
    getSummaryError,
    getSummarySuccess,
    IGetSummaryInput,
} from "./slice";

export function* getSummaryHandler(action: PayloadAction<IGetSummaryInput>) {
    try {
        const response: ISummaryResponse = yield call(
            getSummaryService,
            action.payload.language,
            action.payload.event
        );
        yield put(getSummarySuccess(response));
    } catch (ex) {
        put(getSummaryError());
    }
}

export const sagas = [takeLatest(getSummary, getSummaryHandler)];
