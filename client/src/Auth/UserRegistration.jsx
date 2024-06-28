import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios, { Axios } from "axios";
import Layout from "../components/Layout/Layout";
function UserRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password != formData.confirmpassword) {
        setError("confirm Password not match");
      } else {
        setError("");
        const res = await axios.post(
          "http://localhost:8081/api/v1/auth/register",
          formData
        );
        setError(res.data.message);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen mt-20">
        <div className="grid md:grid-cols-2 rounded-xl md:w-3/4 m-auto p-5 bg-stone-50">
          <div className="">
            <figure>
              <img src="images/blog.jpeg" alt="" />
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              iste ipsum libero corrupti exercitationem pariatur quis alias
              praesentium dolorum, facilis rerum dolore, cumque a repudiandae
              ducimus aperiam fugit aliquam vel.
            </p>
          </div>
          <div className="p-5">
            <div>
              <div className="">
                <figure className="">
                  <img src="images/signUp.png" alt="" className="h-16" />
                </figure>
              </div>
              <form onSubmit={handleOnSubmit}>
                <label>Username</label>
                <div className="mb-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="username"
                    onChange={handleChange}
                    className="w-full p-2 bg-stone-100 rounded-xl outline-blue-500"
                    required
                  />
                </div>
                <label>Email</label>
                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="email"
                    onChange={handleChange}
                    className="w-full p-2 bg-stone-100 rounded-xl outline-blue-500"
                    required
                  />
                </div>
                <label>Password</label>
                <div className="mb-5">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="password"
                    onChange={handleChange}
                    className="w-full p-2 bg-stone-100 rounded-xl outline-blue-500"
                    required
                  />
                </div>
                <label>Confirm Password</label>
                <div className="mb-5">
                  <input
                    type="password"
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    placeholder="password"
                    onChange={handleChange}
                    className="w-full p-2 bg-stone-100 rounded-xl outline-blue-500"
                    required
                  />
                </div>
                <h1 className="text-sm text-red-500">{error}</h1>
                <div className="my-5">
                  <button
                    type="submit"
                    className="w-full uppercase p-2 border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-xl text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="flex gap-2 text-sm">
                <span>Already have an Account?</span>
                <NavLink to="/login" className="text-blue-500 hover:underline">
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserRegistration;
