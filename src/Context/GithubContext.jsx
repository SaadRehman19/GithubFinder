import React from "react";
import { createContext, useState, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [user, setUser] =useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    user: [],
    loading: false,
    singleUser: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const SearchUser = async (text) => {
    //fetch the users from github api stored in env
    console.log(text)
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    console.log(items);

    //set the vlues
    // setUser(data);
    // setLoading(false);
    dispatch({ type: "GET_USERS", payload: items });
  };

  // Get SingleUser
  const SingleUser = async (login) => {
    //fetch the users from github api stored in env

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    //validation
    if (response.status == 400) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_USER", payload: data });
    }
  };

  //clear user from the state
  const ClearUsers = () => {
    console.log("hjeheh");
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        singleUser: state.singleUser,
        SearchUser,
        ClearUsers,
        SingleUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
