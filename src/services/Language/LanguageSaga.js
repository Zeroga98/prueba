import { takeLatest, all } from 'redux-saga/effects';

import { language as languageActions } from "./LanguageActions"

function* setLanguage({ payload: { lng } }) {
}

function* ActionWatcher() {
  yield takeLatest(languageActions.setLanguage, setLanguage)
}

export default function* rootSaga() {
  yield all([ActionWatcher()]);
}