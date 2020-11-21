import { combineReducers } from "redux"

import reducerLanguage from "../services/Language/LanguageReducer"
import reducerEvents from "../services/Events/EventsReducer"
import reducerNews from "../services/News/NewsReducer"

const appReducer = combineReducers({
  language: reducerLanguage,
  events: reducerEvents,
  news: reducerNews,
})

export default appReducer
