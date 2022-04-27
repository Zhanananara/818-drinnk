import React, { createContext, useContext, useReducer } from "react";

import axios from "axios";
import { ACTIONS, API2 } from "../helpers/consts";
import { notifyError } from "../components/Toastify/Toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContextProvider";

export const comContext = createContext();

export const useComContext = () => {
  return useContext(comContext);
};

const INIT_STATE = {
  comments: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_COM:
      return {
        ...state,
        comments: action.payload.data,
      };
    default:
      return state;
  }
}
const ComContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { prodId } = useParams();

  const getCom = async (id) => {
    try {
      let res = await axios.get(`${API2}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_COM,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const addCom = async (newCom) => {
    if (currentUser?.isLogged) {
      try {
        let res = await axios.post(API2, newCom);
        getCom(newCom.prodId);
      } catch (err) {
        notifyError(err);
      }
    } else {
      navigate("/login");
    }
  };
  const delCom = async (id, prodId) => {
    try {
      let res = await axios.delete(`${API2}/${id}`);
      getCom(prodId);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <comContext.Provider
      value={{
        comments: state.comments,
        getCom,
        addCom,
        delCom,
      }}
    >
      {children}
    </comContext.Provider>
  );
};

export default ComContextProvider;
