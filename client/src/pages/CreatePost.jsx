import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function CreatePost() {
  const initialPost = {
    title: "",
    description: "",
    category: "",
    imageURL: "",
    createDate: new Date(),
  };
  const [blogData, setBlogData] = useState(initialPost);
  const options = [
    "Food",
    "Travel",
    "Fitness Blogs",
    "Finance",
    "Neww",
    "Beauty",
  ];
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setBlogData({ ...blogData, [name]: value });
  };
  const uploadFile = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images_preset");
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData
      );
      if (res.status === 200) {
        setLoading(false);
        setUploaded("Image Uploaded");
      }

      const { secure_url } = res.data;
      blogData.imageURL = secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(blogData);
    try {
      const res = await axios.post("http://localhost:8081/api/post", blogData);
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-stone-300 pb-10">
      <div className="w-screen md:w-3/4 m-auto p-10 bg-white">
        <NavLink to="/dashboard">
          <IoArrowBackCircleOutline />
        </NavLink>
        <h1 className="mb-10 uppercase text-center">Create Your Blog !</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-5">
            <label htmlFor="" className="block">
              Title :
            </label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              placeholder="Enter Title"
              className="border outline-none w-full p-2 rounded-lg focus:border-blue-500"
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="" className="block">
              Post Content
            </label>
            <textarea
              name="description"
              value={blogData.description}
              rows="5"
              cols="40"
              placeholder="Enter Here"
              className="border outline-none p-1 w-full rounded-lg focus:ring-blue-500 focus:border-blue-500"
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="mb-5 gap-2 flex">
            <div>
              <label className="block">Upload Images</label>
              <input
                type="file"
                accept="image/*"
                className="border w-full p-1"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="mt-6">
              <button
                className="border w-32 p-2"
                type="button"
                onClick={uploadFile}
              >
                Upload
              </button>
            </div>
          </div>
          {loading ? (
            <ThreeDots
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <div>{uploaded}</div>
          )}

          <div>
            <label htmlFor="" className="block">
              Category
            </label>
            <select
              name="category"
              value={blogData.category}
              id="countries"
              onChange={handleOnChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">--Choose Option--</option>
              {options.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-center items-center p-5 mt-10">
            <button
              type="submit"
              className="border h-10 w-32 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
