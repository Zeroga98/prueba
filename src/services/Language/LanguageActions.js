import { createActions } from 'redux-actions';

export const { language } = createActions({
  LANGUAGE: {
    SET_LANGUAGE: (lng) => ({ lng })
  }
})