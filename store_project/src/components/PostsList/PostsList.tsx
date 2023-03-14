import { useEffect, useState } from "react";
import API from "../../common/api";

const PostItem = ({ title = "" }) => {
  const handleClick = () => {
    console.log("test");
  };
  return <div onClick={handleClick}>{title}</div>;
};

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>POSTS</h2>
      {posts.map((item) => (
        // @ts-ignore
        <PostItem key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default PostsList;
