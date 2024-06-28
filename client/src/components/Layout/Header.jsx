import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [menuIcon, setMenuIcon] = useState(true);
  const isLogin = localStorage.getItem("user");

  const closeIcon = () => {
    setMenuIcon(true);
  };
  const showIcon = () => {
    setMenuIcon(false);
  };

  const handleLogout = () => {
    console.log("Logout done");
    localStorage.clear();
    navigate("/");
  };
  return (
    <header
      className="flex sticky top-0 h-16
    justify-between items-center bg-yellow-600 w-full z-10"
    >
      <NavLink to="/">
        <h2 className="ml-10 p-1 bg-stone-900 font-display font-bold uppercase text-white">
          MyBlogs
        </h2>
      </NavLink>
      <nav className="pl-5 pr-5 hidden md:flex md:block">
        <ul className="flex items-center uppercase justify-center gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>

          <li>
            <NavLink to="/adminLogin">Dashboard</NavLink>
          </li>

          {!isLogin && (
            <NavLink to="/login">
              <li className="bg-stone-900 text-white hover:bg-stone-800 m-3 px-5 py-2">
                Login
              </li>
            </NavLink>
          )}

          {isLogin && (
            <NavLink onClick={handleLogout}>
              <li className="bg-stone-900 text-white hover:bg-stone-800 m-3 px-5 py-2">
                Logout
              </li>
            </NavLink>
          )}
        </ul>
      </nav>
      <button className=" p-5 md:hidden" onClick={() => showIcon()}>
        <IoMenu style={{ fontSize: "25px" }} />
      </button>
      {/* Mobile Navbar */}
      <div
        className={`fixed ${
          menuIcon && "hidden"
        } bg-white inset-0 items-center z-10 md:hidden`}
      >
        <div id="nav-bar" className="flex justify-between items-center">
          <NavLink to="/" className="p-5 font-display">
            Logo
          </NavLink>

          <button className="p-5" onClick={() => closeIcon()}>
            <IoClose style={{ fontSize: "25px" }} />
          </button>
        </div>
        <div className="pl-5">
          <ul className="uppercase">
            <li className="hover:bg-stone-100 m-3 p-3">
              <NavLink to="/" onClick={() => closeIcon()}>
                Home
              </NavLink>
            </li>

            <li className="hover:bg-stone-100 m-3 p-3">
              <NavLink to="/blogs" onClick={() => closeIcon()}>
                Blogs
              </NavLink>
            </li>

            <li className="hover:bg-stone-100 m-3 p-3">
              <NavLink to="/adminLogin" onClick={() => closeIcon()}>
                dashboard
              </NavLink>
            </li>

            {!isLogin && (
              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink to="/login" className="" onClick={() => closeIcon()}>
                  Login
                </NavLink>
              </li>
            )}

            {isLogin && (
              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink className="" onClick={() => closeIcon()}>
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
