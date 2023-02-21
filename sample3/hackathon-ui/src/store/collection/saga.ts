import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
    getCollections,
    getCollectionsError,
    getCollectionsSuccess,
    IGetCollectionsInput,
} from "./slice";
import { ICollectionResponse } from "../../services/models/collections-response";
import { getCollectionsService } from "../../services/collection-service";

export function* getCollectionsHandler(
    action: PayloadAction<IGetCollectionsInput>
) {
    try {
        const response: ICollectionResponse = yield call(
            getCollectionsService,
            action.payload.language,
            action.payload.event
        );
        yield put(getCollectionsSuccess(response));
    } catch (ex) {
        put(getCollectionsError());
    }
}

export const sagas = [takeLatest(getCollections, getCollectionsHandler)];
