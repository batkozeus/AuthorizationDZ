import * as api from '../../api/auth-api';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  SAVE_SESSION
} from './types';

export const signUserIn = credentials => dispatch => {
  dispatch({
    type: SIGN_IN_REQUEST
  });

  api.signIn(credentials).then(
    response => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: response
      });
      dispatch({
        type: SAVE_SESSION
      });
    },
    error => dispatch({
      type: SIGN_IN_FAILURE,
      payload: error
    }),
  );
};

export const signUserOut = () => dispatch =>
  api.signOut().then(() => {
    dispatch({
      type: SIGN_OUT
    });
    dispatch({
      type: SAVE_SESSION
    });
  });