import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useBlogContext } from "../../context/blogContext";
import BlogList from "./BlogList";
function Dashboard() {
  const { blogs } = useBlogContext();
  return (
    <Layout>
      <div className="grid md:grid-cols-2 w-3/4 m-auto flex justify-center items-center">
        <div>
          <figure>
            <img
              src="images/admin.jpg"
              alt=""
              className="h-[200px] float-right"
            />
          </figure>
        </div>
        <div className="">
          <div className="p-5">
            <h1>Admin name</h1>
            <h1>Designation</h1>
            <h1>Email</h1>
            <h1>Total Blogs :{blogs.length}</h1>
          </div>
          <div className="flex gap-5 p-5">
            <div>
              <NavLink to="/createPost">
                <button className="w-24 border bg-stone-900 text-white rounded-lg p-2 hover:bg-stone-700">
                  CreatePost
                </button>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <button className="border w-24 p-2 bg-stone-900 text-white rounded-lg hover:bg-stone-700">
                  Logout
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <BlogList blogs={blogs} />;
      </div>
    </Layout>
  );
}

export default Dashboard;
