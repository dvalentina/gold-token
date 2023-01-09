import React, { createContext, useReducer } from "react";
import { createPortal } from "react-dom";
import Notifications from "../components/Notifications";

export const ToastContext = createContext();

const initialState = [];

export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const toastReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: +new Date(),
          content: action.payload.content,
          status: action.payload.status,
        },
      ];
    case REMOVE:
      return state.filter((t) => t.id !== action.payload.id);
    default:
      return state;
  }
};

const ToastProvider = ({ children }) => {
  const [toasts, toastDispatch] = useReducer(toastReducer, initialState);
  return (
    <ToastContext.Provider value={{ toasts, toastDispatch }}>
      {children}

      {createPortal(<Notifications toasts={toasts} />, document.body)}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
