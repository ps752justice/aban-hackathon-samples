import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../state";
import { ILanguage } from "../../services/models/language-response";

export interface ILanguageState {
    language: ILanguage;
    languages: ILanguage[];
    changing: boolean;
    isLoading: boolean;
    error: boolean;
}

const languageSlice = createSlice({
    name: "@@rs/Summary",
    initialState: initialState.language,
    reducers: {
        setLanguage(state, _: PayloadAction<ILanguage>) {
            state.changing = true;
        },
        setLanguageSuccess(state, action: PayloadAction<ILanguage>) {
            state.language = action.payload;
            state.changing = false;
        },
        getLanguages(state) {
            state.isLoading = true;
            state.error = false;
        },
        getLanguagesSuccess(state, action: PayloadAction<ILanguage[]>) {
            state.isLoading = false;
            state.error = false;
            state.languages = action.payload;
        },
    },
});

export const {
    setLanguage,
    setLanguageSuccess,
    getLanguages,
    getLanguagesSuccess,
} = languageSlice.actions;
export default languageSlice.reducer;
