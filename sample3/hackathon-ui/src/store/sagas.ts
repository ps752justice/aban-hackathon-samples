import { all } from "@redux-saga/core/effects";
import { sagas as pingServerSaga } from "./ping-server/saga";
import { sagas as summarySaga } from "./summary/saga";
import { sagas as eventsSaga } from "./events/saga";
import { sagas as searchSaga } from "./search/saga";
import { sagas as languageSaga } from "./language/saga";
import { sagas as collectionsSaga } from "./collection/saga";
import { sagas as abanSaga } from "./aban/saga";

export default function* sagas() {
    yield all([...pingServerSaga]);
    yield all([...summarySaga]);
    yield all([...eventsSaga]);
    yield all([...languageSaga]);
    yield all([...searchSaga]);
    yield all([...collectionsSaga]);
    yield all([...abanSaga]);
}
