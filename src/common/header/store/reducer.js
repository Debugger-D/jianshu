// import { Action } from 'Directory';

const INITIAL_STATE = {
  focused: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'search_focus':
      return {
        focused: true
      };
    case 'search_blur':
      return {
        focused: false
      };
    default: return state;
  }
};