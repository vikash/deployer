import Immutable from 'immutable';

import * as actions from './actionTypes';

const initialState = Immutable.fromJS({
  running: [],
  pending: [],
  projects: [],
  groups: [],
  buttons: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_BUTTONS:
          console.log(action);
      // state.set('buttons', action.buttons);
    default:
      return state;
  }
}
