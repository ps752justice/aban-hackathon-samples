import { createSelector } from "reselect";
import { IStoreState } from "../state";
import { ILanguageState } from "./slice";

export const languageSelector = createSelector(
    (state: IStoreState): ILanguageState => {
        return state.language;
    },
    (x: ILanguageState) => {
        return x.language;
    }
);

export const getLanguagesSelector = createSelector(
    (state: IStoreState): ILanguageState => {
        return state.language;
    },
    (x: ILanguageState) => {
        return x.languages;
    }
);

export const getLanguagesStateSelector = createSelector(
    (state: IStoreState): ILanguageState => {
        return state.language;
    },
    (x: ILanguageState) => {
        return {
            error: x.error,
            isLoading: x.isLoading,
        };
    }
);
