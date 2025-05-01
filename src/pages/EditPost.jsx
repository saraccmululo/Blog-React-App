import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import { useContext, useEffect } from "react";

const EditPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  const { findPostById, updatePost, onDelete } = useContext(PostContext);

  const post = findPostById(Number(id));
  console.log(post);

  useEffect(() => {
    if (post) {
      reset({ title: post.title, content: post.content });
    }
  }, [post]);

  const onSubmit = (data) => {
    updatePost({ ...data, id: Number(id) });
    navigate("/");
  };

  const handleDelete = (id) => {
    onDelete(Number(id));
    navigate("/");
  };

  if (!post) return <p>Post Not Found</p>;

  return (
    <div>
      <h3>Edit a Post</h3>
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
          Update Post
        </button>
        <button type="button" onClick={() => handleDelete(Number(id))}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
