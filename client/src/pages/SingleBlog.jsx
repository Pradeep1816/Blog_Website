import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../context/blogContext";
import Layout from "../components/Layout/Layout";
import Contact from "./Contact";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function SingleBlog() {
  const { id } = useParams();
  const { getSingleBlog, singleBlog } = useBlogContext();
  console.log(singleBlog);
  useEffect(() => {
    getSingleBlog(id);
  }, []);
  return (
    <Layout>
      <div className="p-5">
        <NavLink to="/blogs">
          <IoArrowBackCircleOutline
            className="hover:text-blue-500"
            style={{ fontSize: "40px" }}
          />
        </NavLink>
        <div className="w-1/2 m-auto p-5 flex flex-col">
          <div>
            <figure>
              <img
                src={singleBlog.imageURL}
                alt={singleBlog.imageURL}
                className="w-[40%] min-w-[100%]"
              />
            </figure>
          </div>
          <div className="flex justify-between my-2">
            <h1>{singleBlog.title}</h1>
            <h1>{new Date(singleBlog.createdAt).toLocaleDateString()}</h1>
          </div>
          <div>
            <h1 className="font-bold text-3xl">{singleBlog.category}</h1>
          </div>
          <hr />
          <div className="mt-5">
            <h1>{singleBlog.description}</h1>
          </div>
        </div>
        <Contact />
      </div>
    </Layout>
  );
}

export default SingleBlog;
