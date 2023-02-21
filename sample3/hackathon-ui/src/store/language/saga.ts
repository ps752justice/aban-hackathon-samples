import { put, takeLatest } from "@redux-saga/core/effects";
import { AnyAction, PayloadAction } from "@reduxjs/toolkit";
import { ILanguage } from "../../services/models/language-response";

import {
    getLanguages,
    getLanguagesSuccess,
    setLanguage,
    setLanguageSuccess,
} from "./slice";

export function* setLanguageHandler(action: PayloadAction<ILanguage>) {
    yield put(setLanguageSuccess(action.payload));
}

export function* getLanguagesHandler(action: AnyAction) {
    const languages: ILanguage[] = [
        {
            code: "fa",
            abbr: "فا",
            title: "فارسی",
            isRtl: true,
        },
        {
            code: "en",
            abbr: "EN",
            title: "English",
            isRtl: false,
        },
    ];
    yield put(getLanguagesSuccess(languages));
}

export const sagas = [
    takeLatest(setLanguage, setLanguageHandler),
    takeLatest(getLanguages, getLanguagesHandler),
];
