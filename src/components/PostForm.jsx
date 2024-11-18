import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PostForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { post } = location.state || {};
  // console.log(post)

  const [title, setTitle] = useState(post ? post.title : "");
  const [description, setDescription] = useState(post ? post.description : "");
  const [image, setImage] = useState(post ? post.image : "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData to handle multipart/form-data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image); // Image file

    // try {
    //     const response = await axios.post("http://localhost:5000/api/posts", formData, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     });

    //     // console.log("Post created:", response.data);
    //     alert("Post created successfully!");
    //     navigate("/")
    // } catch (error) {
    //     // console.error("Error creating post:", error);
    //     alert("Failed to create post.");
    // }
    try {
      let response;
      if (post) {
        response = await axios.put(
          `http://localhost:5000/api/post/${post._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/api/posts",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      if (!response.status === 200) {
        throw new Error("Failed to save the post");
      }
      alert("Successfull !!!");

      navigate(`/`);
    } catch (error) {
      console.error(error);
      alert("Error saving the post");
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-self-center my-5 bg-gray-200 p-2 "
      onSubmit={handleSubmit}
    >
      <h1 className="m-3 text-lg">{post ? "Edit Post" : "Create Post"}</h1>
      <div className=" flex flex-col px-2">
        <input
          label="Title :"
          placeholder="Title"
          value={title}
          className="mb-4 border border-1 w-full p-2  "
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <textarea
          label="Description :"
          placeholder="Description"
          value={description}
          className="mb-4 border border-1 w-full p-2"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />

        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit" className="w-full bg-gray-500 mb-2 rounded p-1 mt-5">
          {post ? "Update Post" : "Create Post"}
        </button>
      </div>
    </form>
  );
}

export default PostForm;
