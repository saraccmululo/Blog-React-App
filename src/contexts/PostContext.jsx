import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      return JSON.parse(storedPosts);
    } else {
      return [
        {
          id: 1,
          title: "Hello World",
          content: "Welcome to my new blog.",
        },
        {
          id: 2,
          title: "Second Post",
          content: "Sample content written here.",
        },
      ];
    }
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    const lastId = posts[posts.length - 1].id;
    setPosts((prev) => [...prev, { ...newPost, id: lastId + 1 }]);
  };

  const findPostById = (id) => {
    return posts.find((post) => post.id === id);
  };

  const updatePost = (updatedPost) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === updatedPost.id ? { ...post, ...updatedPost } : post
      )
    ); //When the post.id matches updatedPost.id, it merges the updatedPost properties with the existing post. This ensures that you don't lose any other fields in the post that are not part of updatedPost. Again, the other posts in the array are unaffected.
  };

  const onDelete = (id) => {
    const confirmDelete=window.confirm("Are you sure you want to delete this post?");
    if(confirmDelete){
      setPosts((prev) => prev.filter((post) => post.id !== id));
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, addPost, findPostById, updatePost, onDelete }}
    >
      {children}
    </PostContext.Provider>
  );
}
export default PostProvider;
