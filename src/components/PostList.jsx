import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function PostList() {
  const [posts , setPost] = useState([]);


  const navigate = useNavigate(); 
  useEffect(()=>{
     const fetchPosts = async ()=>{
      try {
        const AllPosts =await axios.get("http://localhost:5000/api/");
        console.log(AllPosts.data.AllPosts)
        setPost(AllPosts.data.AllPosts);
      } catch (error) {
        console.log(error);
      }
     }
     fetchPosts();
  },[])

  function handleClick (id){
      navigate(`/post/${id}`)
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
      <button className=" px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex  justify-self-end" onClick={()=>navigate("/PostForm")}>Add Post</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
      {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`http://localhost:5000${post.image}`}
                alt={post.title }
                className="w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{post.title || "Untitled Post"}</h2>
                <p className="text-gray-600">{post.description || "No description available."}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"onClick={()=> handleClick(post._id)}>
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Loading ......</p>
        )}
      </div>
    </div>
  )
}

export default PostList;
