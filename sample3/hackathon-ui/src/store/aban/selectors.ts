import { createSelector } from "reselect";
import { IStoreState } from "../state";
import { IAbanState } from "./slice";

export const getDeathReporteSelector = createSelector(
    (state: IStoreState): IAbanState => {
        return state.aban;
    },
    (x: IAbanState) => {
        return x.deathReport;
    }
);

export const getDeathReportStateSelector = createSelector(
    (state: IStoreState): IAbanState => {
        return state.aban;
    },
    (x: IAbanState) => {
        return {
            error: x.error,
            isLoading: x.isLoading,
        };
    }
);
