import constant from './constant';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  focused: false
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constant.SEARCH_FOCUS:
      return state.set('focused', true);
    case constant.SEARCH_BLUR:
      return state.set('focused', false);
    default: return state;
  }
};