import React, { createContext } from 'react';

export const CORE_CONSTANTS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  USER: 'USER',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CORE_CONSTANTS.LOGIN: {
      console.log(action);
      return {
        ...state,
        user: action.value,
        isLogged: true,
      };
    }
    case CORE_CONSTANTS.LOGOUT: {
      return {
        ...state,
        user: '',
        isLogged: false,
      };
    }
    default:
      return state;
  }
};

export const initialState = JSON.parse(localStorage.getItem(CORE_CONSTANTS.USER)) || {
  user: '',
  isLogged: false,
};

export const CoreContext = createContext();
