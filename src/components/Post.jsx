import { useNavigate } from "react-router-dom"

const Post = ({post}) => {
  const navigate = useNavigate();

  return (
    <div style={{padding:20, margin:10, width: 300, border:"2px solid white"}} onClick={()=> navigate(`/edit-post/${post.id}`)}>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  )
}

export default Post