import {userDetailsAction} from './userDetails';

export {userDetailsAction};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const failResponse = (dispatch: any, error: unknown, type: string) => {
  dispatch({
    type: type,
    payload: {
      error,
    },
  });
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const successReponse = (dispatch: any, data: any, type: string) => {
  dispatch({
    type: type,
    data,
  });
};
