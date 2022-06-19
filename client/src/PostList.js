import axios from "axios";
import React, { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  // vamos obter os dados do 4000 do objeto posts = {}
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    //const res = await axios.get('http://localhost:4000/posts')
    const res = await axios.get("http://localhost:4002/posts");
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // retornar um array dos valores do objeto
  // matriz de objetos e depois mapeamos cada postagem
  console.log(posts);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="card" style={{ width: "30%", marginBottom: "20px" }} key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
}
