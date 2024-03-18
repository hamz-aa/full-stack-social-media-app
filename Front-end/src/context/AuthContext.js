import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: {
      $oid: "65b780141940ed3a320844c8",
    },
    username: "hamza",
    email: "hamza@mail.com",
    password: "$2b$10$.ajgOZSzxkJjoAEt0Pdus.RGy7JjnhebNfWgilHy8TfKPMWryf886",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: ["65b77d05ad2fc6dcb9344e0c", "65b7801f1940ed3a320844ca"],
    isAdmin: false,
    createdAt: {
      $date: "2024-01-29T10:38:12.573Z",
    },
    updatedAt: {
      $date: "2024-01-29T16:33:15.682Z",
    },
    __v: 0,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
