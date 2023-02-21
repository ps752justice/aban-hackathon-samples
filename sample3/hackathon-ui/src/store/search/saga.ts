import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ILanguage } from "../../services/models/language-response";

import { ISearchResponse } from "../../services/models/search-response";
import { getSearchService } from "../../services/search-service";
import { getSearch, getSearchError, getSearchSuccess } from "./slice";

export function* getSearchHandler(action: PayloadAction<ILanguage>) {
    try {
        const response: ISearchResponse = yield call(
            getSearchService,
            action.payload
        );
        yield put(getSearchSuccess(response));
    } catch (ex) {
        put(getSearchError());
    }
}

export const sagas = [takeLatest(getSearch, getSearchHandler)];
