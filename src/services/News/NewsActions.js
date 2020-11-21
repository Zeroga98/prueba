import { createActions } from "redux-actions"

export const newsActions = createActions({
  GET_NEWS: () => ({}),
  GET_NEWS_RESPONSE: news => ({ news }),

  GET_NEWS_ONE: (articleId) => ({articleId}),
  GET_NEWS_ONE_RESPONSE: articule => ({ articule }),
})
