import { ActionTypeUser, ActionCreatorUser } from "./userAction.js";
// import { ActionCreatorApp } from "../app/appAction.js";
import authUsersJson from '../../JSON/auth-users.json'

export const initialState = {
  isAuthUser: false,
};

export const OperationUser = {
  userAuth: (loginData) => (dispatch) => {
    const userAuth = authUsersJson.find((authUserJson) => {
      return authUserJson.login === loginData.login && authUserJson.password === loginData.password;
    })

    if (userAuth) {
      localStorage.setItem('login', JSON.stringify(userAuth));
      dispatch(ActionCreatorUser.getStateAuthUser(true));
    } else {
      dispatch(ActionCreatorUser.getStateAuthUser(false));
    }
  },

  userExit: () => (dispatch) => {
    localStorage.removeItem("login");
    dispatch(ActionCreatorUser.getStateAuthUser(false));
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeUser.STATE_AUTH_USER:
      return {
        ...state,
        isAuthUser: action.payload,
      };

    default:
      break;
  }

  return state;
};
