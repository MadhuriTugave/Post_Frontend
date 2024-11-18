import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ReadMore() {
  const { id } = useParams(); // Get post ID from URL parameters
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:5000/api/post/${id}`);
        // console.log(response)
  
      setPost(response.data.Post);
    };

    fetchPost();
  }, [id]);

  const handleDelet = async () => {
    try {
      const response = await axios(`http://localhost:5000/api/post/${id}`, {
        method: "DELETE",
      });
      // console.log(response)
      alert("Post deleted !!!!");
      if (!response.status === 200) {
        throw new Error("Failed to delete the post");
      }

      navigate("/");
    } catch (error) {
      // console.error(error);
      alert("Error deleting the post");
    }
  };


  const handleEditClick = () => {
    console.log(post._id)
    navigate(`/postForm`, {
      state: { post } 
    });
  };
  if (!post) return <p>Loading...</p>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <img
        src={`http://localhost:5000${post.image}`}
        alt={post.title}
        className="w-full h-56 mb-4"
      />
      <p className="text-gray-600">{post.description}</p>
      <div className="flex mt-5 gap-5">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={handleEditClick}
        >
          Edit Post
        </button>
        <button
          className=" px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={handleDelet}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default ReadMore;
