import { useForm } from "react-hook-form";
import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const {addPost} = useContext(PostContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    console.log("Form data", data);
    addPost(data);
    navigate("/");
  };

  return (
    <div>
      <h3>Create a New Post</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label style={{ marginRight: 10 }}>Title</label>
          <input
            type="text"
            placeholder="Post title..."
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
          />
        </div>
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}

        <div style={{ marginTop: 10 }}>
          <label style={{ marginRight: 10 }}>Content</label>
          <input
            type="text"
            placeholder="Post content..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 10,
                message: "Content must be at least 10 characters",
              },
            })}
          />
        </div>
        {errors.content && (
          <p style={{ color: "red" }}>{errors.content.message}</p>
        )}
        <button type="submit" style={{ marginTop: 10 }}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
