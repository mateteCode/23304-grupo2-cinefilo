import React, { useContext, useReducer } from "react";
const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const initialSearchData = {
  data: [],
  dataLoading: false,
  textSearch: "",
  page: null,
  totalPages: 0,
  totalResults: 0,
};

const initialState = {
  currentMovie: 0,
  showComments: false,
  comments: [],
  userPhoto: null,
  userName: null,
  blocked: [],
  favorites: [],
  searchData: initialSearchData,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATE": {
      return initialState;
    }

    case "RESET_SEARCH": {
      return {
        ...state,
        searchData: initialSearchData,
      };
    }

    case "OPEN_POPUP_COMMENTS": {
      return {
        ...state,
        currentMovie: action.value,
        showComments: true,
      };
    }

    case "CLOSE_POPUP_COMMENTS": {
      return {
        ...state,
        currentMovie: null,
        showComments: false,
        comments: [],
      };
    }

    case "ADD_COMMENT":
      return {
        ...state,
        comments: [action.value, ...state.comments],
      };

    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.value.reverse(),
      };

    case "SET_USERPHOTO":
      return {
        ...state,
        userPhoto: action.value,
      };

    case "SET_USERNAME":
      return {
        ...state,
        userName: action.value,
      };

    case "SET_BLOCKED":
      return {
        ...state,
        blocked: action.value,
      };

    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.value,
      };

    case "RESET_DATA": {
      return {
        ...state,
        searchData: {
          ...state.searchData,
          data: [],
        },
      };
    }

    case "ADD_DATA": {
      return {
        ...state,
        searchData: {
          ...state.searchData,
          data: [...state.searchData.data, ...action.value],
        },
      };
    }

    case "SET_DATALOADING": {
      return {
        ...state,
        searchData: {
          ...state.searchData,
          dataLoading: action.value,
        },
      };
    }

    case "SET_TEXTSEARCH": {
      return {
        ...state,
        searchData: {
          ...state.searchData,
          textSearch: action.value,
        },
      };
    }

    case "SET_PAGE": {
      return {
        ...state,
        searchData: {
          ...state.searchData,
          page: action.value,
        },
      };
    }

    case "SET_TOTALPAGES": {
      return {
        ...state,
        searchData: {
          ...state.searchData,
          totalPages: action.value,
        },
      };
    }

    case "SET_TOTALRESULTS": {
      return {
        ...state,
        searchData: {
          ...state.searchData,
          totalResults: action.value,
        },
      };
    }

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
        userPhoto: state.userPhoto,
        userName: state.userName,
        blocked: state.blocked,
        favorites: state.favorites,
        state,
        dispatch,
        data: state.searchData.data,
        dataLoading: state.searchData.dataLoading,
        textSearch: state.searchData.textSearch,
        page: state.searchData.page,
        totalPages: state.searchData.totalPages,
        totalResults: state.searchData.totalResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, useAppContext };
