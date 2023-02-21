import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import config from "../config/config";
import sagas from "./sagas";

import pingServer from "./ping-server/slice";
import summary from "./summary/slice";
import language from "./language/slice";
import events from "./events/slice";
import search from "./search/slice";
import collections from "./collection/slice";
import aban from "./aban/slice";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (config.env === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = configureStore({
    reducer: {
        pingServer,
        summary,
        language,
        events,
        search,
        collections,
        aban,
    },
    middleware: middlewares,
    devTools: { maxAge: 200 },
});

sagaMiddleware.run(sagas);

export default store;
