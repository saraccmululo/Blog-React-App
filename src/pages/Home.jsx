import { Link } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";
import Post from "../components/Post";

const Home = () => {
  const { posts } = useContext(PostContext);

  return (
    <div>
      <h3>Blog Posts</h3>
      <ul
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
