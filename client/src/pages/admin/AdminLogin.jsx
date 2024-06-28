import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const [formData, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email == "pradeep@gmail.com" &&
      formData.password === "admin"
    ) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="w-fulll md:w-4/12 m-auto border mt-10 bg-stone-500 rounded-lg">
        <h1 className="text-center mt-5 uppercase">admin login</h1>
        <form action="" className="p-5" onSubmit={handleOnSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="username"
              value={formData.email}
              onChange={handleOnChange}
              className="w-full border outline-none focus:border-blue-500 bg-gray-50 p-2 my-5"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleOnChange}
              className="w-full border outline-none focus:border-blue-500 bg-gray-50 p-2 my-5"
            />
          </div>
          <div className="flex justify-center ">
            <button className="w-32 bg-stone-900 text-white p-2" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
