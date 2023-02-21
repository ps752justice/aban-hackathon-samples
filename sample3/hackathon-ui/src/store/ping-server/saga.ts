import { call, put, takeLatest } from "@redux-saga/core/effects";

import { IPingResponse } from "../../services/models/ping-response";
import { pingBakcend } from "../../services/ping-service";
import { pingServer, pingServerError, pingServerSuccess } from "./slice";

export function* pingServerHandler() {
    try {
        const response: IPingResponse = yield call(pingBakcend);
        yield put(pingServerSuccess(response));
    } catch (ex) {
        put(pingServerError());
    }
}

export const sagas = [takeLatest(pingServer, pingServerHandler)];
