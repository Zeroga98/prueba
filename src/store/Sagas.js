import { fork, all } from "redux-saga/effects"

import LanguageSaga from "../services/Language/LanguageSaga"
import EventsSaga from "../services/Events/EventsSaga"
import NewsSaga from "../services/News/NewsSaga"

export default function* rootSaga() {
  yield all([
    fork(LanguageSaga), 
    fork(EventsSaga),
    fork(NewsSaga)
  ])
}
