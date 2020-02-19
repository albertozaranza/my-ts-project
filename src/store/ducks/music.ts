import {createActions, createReducer} from 'reduxsauce';

/**
 * Action types & creators
 */
export const {Types, Creators} = createActions({
  nextMusic: ['id'],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  id: 0,
};

const next = (state = INITIAL_STATE, action) => ({
  ...state,
  id: action.id,
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.NEXT_MUSIC]: next,
});
