import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  language: undefined
}

const reducer = handleActions({
  LANGUAGE: {
    SET_LANGUAGE: (state, { payload: { lng } }) => ({ ...state, language: lng }),
  }
},
  INITIAL_STATE
);

export default reducer;