import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import BlogsCard from "../components/BlogsCard";
import { useBlogContext } from "../context/blogContext";
function Blogs() {
  const { blogs } = useBlogContext();
  return (
    <Layout>
      <div className="flex gap-2 flex-wrap  my-5 justify-center items-center">
        {blogs.length === 0 ? (
          <div className="h-screen">
            <div className="text-center">Sorry No Blogs Found</div>
          </div>
        ) : (
          blogs.map((blog, index) => {
            return <BlogsCard key={index} blog={blog} />;
          })
        )}
      </div>
    </Layout>
  );
}

export default Blogs;
