import { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { reducer } from "../reducer/blogReducer";
const BlogContext = createContext();

const initialState = {
  isLoading: false,
  blogs: [],
  isError: false,
  isSingLoading: false,
  singleBlog: {},
};

const BlogProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBlogs = async () => {
    dispatch({ type: "SET_isLoading" });
    try {
      const res = await axios.get("http://localhost:8081/api/all-post");
      const blogs = res.data.blogs;
      dispatch({ type: "BLOGS_DATA", payload: blogs });

      // if (res.data.success) {
      //   setBlogsData(res.data.blogs);
      //   setData(res.data);
      // }
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleBlog = async (id) => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      const res = await axios.get("http://localhost:8081/api/all-post");
      const singleBlog = res.data.blogs.find((blog) => blog._id === id);
      dispatch({ type: "SINGLE_BLOG", payload: singleBlog });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <BlogContext.Provider value={{ ...state, getSingleBlog }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export { BlogProvider };
