import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { getAbanDeaths } from "../../services/aban-service";
import { IDeathResponse } from "../../services/models/aban-response";

import {
    getAbanDeathReport,
    getAbanDeathReportSuccess,
    getAbanDeathReportError,
    IGetAbanDeathReportInput,
} from "./slice";

export function* pingServerHandler(
    action: PayloadAction<IGetAbanDeathReportInput>
) {
    try {
        const response: IDeathResponse = yield call(
            getAbanDeaths,
            action.payload.searchToken,
            action.payload.languageCode
        );
        yield put(getAbanDeathReportSuccess(response));
    } catch (ex) {
        put(getAbanDeathReportError());
    }
}

export const sagas = [takeLatest(getAbanDeathReport, pingServerHandler)];
