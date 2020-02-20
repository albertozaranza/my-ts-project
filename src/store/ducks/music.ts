import {createActions, createReducer} from 'reduxsauce';
import musics from '../../data/musics';

// Action types & creators
export const {Types, Creators} = createActions({
  nextMusic: null,
});

// Handlers
const INITIAL_STATE = {
  id: musics[0].id,
  albumLength: musics.length,
  name: musics[0].name,
  albumPhoto: musics[0].avatar,
};

const next = (state = INITIAL_STATE) => ({
  ...state,
  id: state.id >= state.albumLength ? 1 : state.id + 1,
  name: state.id >= state.albumLength ? musics[0].name : musics[state.id].name,
  albumPhoto:
    state.id >= state.albumLength ? musics[0].avatar : musics[state.id].avatar,
});

// Reducers
export default createReducer(INITIAL_STATE, {
  [Types.NEXT_MUSIC]: next,
});
