import React from "react";
import {useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../Context/GithubContext";

const UserResults = () => {
  const { user, loading, fetchUser } = useContext(GithubContext);

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  if (!loading) {
    return (
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {user.map((data) => {
          return <UserItem key={data.id} user={data} />
        })}
      </div>
    );
  } else {
    return <h3> Loading... </h3>;
  }
};

export default UserResults;
