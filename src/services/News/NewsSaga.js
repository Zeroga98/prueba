import { put, takeLatest, all } from "redux-saga/effects"
import { newsActions } from "./NewsActions"
import Api from "../../assets/common/Api/Api"

function* getNews() {
  try {
    const response = yield Api.get("article/all")

    if (response.status === 200) {
      yield put(newsActions.getNewsResponse(response.payload.articles))
      return
    }
    const err = new TypeError("Error GetCities")
    yield put(newsActions.getNewsResponse(err))
  } catch (error) {
    const err = new TypeError("Error GetCities")
    yield put(newsActions.getNewsResponse(err))
  }
}

function* getNewsOne(data) {
  try {
    const response = yield Api.get("article", data.payload)
    if (response.status === 200) {
      yield put(newsActions.getNewsOneResponse(response.payload.article))
      return
    }
    const err = new TypeError("Error GetCities")
    yield put(newsActions.getNewsOneResponse(err))
  } catch (error) {
    const err = new TypeError("Error GetCities")
    yield put(newsActions.getNewsOneResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(newsActions.getNews, getNews)
  yield takeLatest(newsActions.getNewsOne, getNewsOne)
}

export default function* rootSaga() {
  yield all([ActionWatcher()])
}
