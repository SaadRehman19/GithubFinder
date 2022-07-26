import React from "react";
import { useState, useContext } from "react";
import "./userSearchcss.css";
import GithubContext from "../../Context/GithubContext";

const UserSearch = () => {
  const { user, SearchUser, ClearUsers } = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("please write something");
    } else {
      //todo search
      SearchUser(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-4 right-0 rounded-l-none w-36 btn btn-lg border-box"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {user.length > 0 && (
        <div>
          <button onClick={ClearUsers} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
