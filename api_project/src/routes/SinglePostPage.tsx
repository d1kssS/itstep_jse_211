import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../common/api";

const SinglePostPage = () => {
  const { postId } = useParams<string>();
  const [post, setPost] = useState({});

  const getPost = async (id: number) => {
    const res = await apiClient.get(`/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    if (postId) {
      const id = parseInt(postId);
      !isNaN(id) && getPost(id);
    }
  }, []);

  return (
    <div>
      <h1>Single Post</h1>
      {/* @ts-ignore */}
      <h2>{post.title}</h2>
    </div>
  );
};

export default SinglePostPage;
