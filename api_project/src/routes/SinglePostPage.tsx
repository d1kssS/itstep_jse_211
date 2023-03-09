import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../common/api";

const SinglePostPage = () => {
  const { postId } = useParams<string>();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  console.log({ postId });

  const getPost = async (id: number) => {
    const res = await apiClient.get(`/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    if (postId) {
      const id = parseInt(postId);
      !isNaN(id) && getPost(id);
    }
  }, [postId]);

  return (
    <div>
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
      <button onClick={() => navigate('/posts')}>Back</button>
      <h1>Single Post</h1>
      {/* @ts-ignore */}
      <h2>{post.title}</h2>
    </div>
  );
};

export default SinglePostPage;
