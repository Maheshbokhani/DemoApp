/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {secureGet} from '../../api/Fetch';
import {
  User_Details_Action,
  User_Details_Action_Failure,
  User_Details_Action_Success,
} from '../actionTypes';
import {USER_DETAILS} from '../../api/apiPath';
import {failResponse, successReponse} from '.';

/**
 * userDetailsAction
 * @returns get multiple user info
 */
export function userDetailsAction() {
  return async (dispatch: (arg0: {type: any}) => void) => {
    dispatch({type: User_Details_Action});
    try {
      const res: string[] = await secureGet(USER_DETAILS);
      console.log('RES', res);
      successReponse(dispatch, res, User_Details_Action_Success);
    } catch (error) {
      console.log('Error', error);
      failResponse(dispatch, error, User_Details_Action_Failure);
    }
  };
}
