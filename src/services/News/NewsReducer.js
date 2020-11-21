import { handleActions } from "redux-actions"
export const INITIAL_STATE = {
  loading: false,
  error: false,
  //news: [],
  articule:[]
}
const newsReducer = handleActions(
  {
    GET_NEWS: state => ({ ...state, loading: true }),
    GET_NEWS_RESPONSE: {
      next(state, { payload: { news } }) {
        return { ...state, news, loading: false }
      },
      throw(state, action) {
        return { ...state, error: true, loading: false }
      },
    },
    GET_NEWS_ONE: state => ({ ...state, loading: true }),
    GET_NEWS_ONE_RESPONSE: {
      next(state, { payload: { articule } }) {
        return { ...state, articule, loading: false }
      },
      throw(state, action) {
        return { ...state, error: true, loading: false }
      },
    },
  },

  INITIAL_STATE
)

export default newsReducer
