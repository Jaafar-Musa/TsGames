import { Types } from "../actions/ActionTypes";

interface ItoggleNavReducerState {
  open: boolean;
}

const toggleNavReducerState: ItoggleNavReducerState = {
  open: false,
};

export const toggleNavReducer = (
  state = toggleNavReducerState,
  action: any
): ItoggleNavReducerState => {
  switch (action.type) {
    case Types.TOGGLE_NAV:
      return Object.assign({}, state, { open: !state });
    default:
      return state;
  }
};
