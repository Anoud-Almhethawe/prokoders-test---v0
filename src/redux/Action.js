import {
  FAIL_REQUEST,
  GET_USER_LIST,
  MAKE_REQUEST,
  REQUEST_SUCCESS,
} from "./ActionType";

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};
export const requestSuccess = (data) => {
  return {
    type: REQUEST_SUCCESS,
    payload: data,
  };
};
