import React from "react";
import UserResults from "../components/Users/UserResults";
import UserSearch from "../components/Users/UserSearch";

const Home = () => {
  return (
    <div className="text-6xl">
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;
