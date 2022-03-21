import {
  User_Details_Action,
  User_Details_Action_Success,
  User_Details_Action_Failure,
} from '../actionTypes';
import {state, InitialAction} from './props';

const intialState = state;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const userDetailsReducer = (
  state = intialState,
  action: InitialAction,
) => {
  switch (action.type) {
    case User_Details_Action: {
      return {
        ...state,
        loading: true,
      };
    }
    case User_Details_Action_Success: {
      return {
        ...state,
        data: action.data,
        loading: false,
        status: 'success',
      };
    }
    case User_Details_Action_Failure: {
      return {
        ...state,
        data: action.data,
        loading: false,
        status: 'fail',
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
