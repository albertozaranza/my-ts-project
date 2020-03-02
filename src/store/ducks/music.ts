import {createActions, createReducer} from 'reduxsauce';
import musics from '../../data/musics';

// Action types & creators
export const {Types, Creators} = createActions({
  nextMusic: null,
  pause: null,
});

// Handlers
const INITIAL_STATE = {
  id: musics[0].id,
  albumLength: musics.length,
  name: musics[0].name,
  albumPhoto: musics[0].avatar,
  paused: true,
};

const next = (state = INITIAL_STATE) => ({
  ...state,
  id: state.id >= state.albumLength ? 1 : state.id + 1,
  name: state.id >= state.albumLength ? musics[0].name : musics[state.id].name,
  albumPhoto:
    state.id >= state.albumLength ? musics[0].avatar : musics[state.id].avatar,
});

const pause = (state = INITIAL_STATE) => ({
  ...state,
  paused: !state.paused,
});

// Reducers
export default createReducer(INITIAL_STATE, {
  [Types.NEXT_MUSIC]: next,
  [Types.PAUSE]: pause,
});
