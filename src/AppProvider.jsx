import React, { useContext, useReducer } from "react";
import { addComment } from "./API/firebase";
const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};
const initialState = {
  currentMovie: 0,
  showComments: false,
  comments: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_COMMENTS": {
      return {
        ...state,
        currentMovie: action.value,
        showComments: true,
      };
    }
    case "HIDE_COMMENTS": {
      return {
        ...state,
        currentMovie: null,
        showComments: false,
        comments: [],
      };
    }
    case "SAVE_COMMENT":
      addComment(state.currentMovie.id, action.value);
      return {
        ...state,
        comments: [action.value, ...state.comments],
      };
    case "GET_COMMENTS_COMPLETED":
      console.log(`case: ${action.value} `);
      return {
        ...state,
        comments: action.value.reverse(),
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider
      value={{
        currentMovie: state.currentMovie,
        showComments: state.showComments,
        comments: state.comments,
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, useAppContext };
