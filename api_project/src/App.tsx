import React, { useEffect, useState } from "react";
import { UserList, PostsList, SinglePost } from "./components";
import "./styles.css";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [postId, setPostId] = useState(0);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const onClickPost = (id: number) => {
    setPostId(id);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      {/* <UserList /> */}
      <h1>{postId}</h1>
      <div className="container">
        <div className="column" style={{ display: isShow ? "block" : "none" }}>
          {isShow && <PostsList onClickPost={onClickPost} />}
        </div>
        <div className="column">
          <SinglePost />
        </div>
      </div>
    </div>
  );
}

export default App;
