import React from "react";
import Layout from "../components/Layout/Layout";
function Contact() {
  return (
    <div>
      <div className="md:m-auto md:w-1/2 p-10">
        <h2 className="my-5">Make Comment</h2>
        <div className="border rounded-lg p-10 bg-stone-100 w-full">
          <form action="">
            <div className="bg-stone-100 w-[100%] border mb-5 ">
              <input
                type="text"
                placeholder="username"
                name="username"
                value=""
                required
                autoComplete="off"
                className="w-[100%] p-2"
              />
            </div>
            <div className="border w-[100%] mb-5">
              <input
                type="email"
                placeholder="email"
                name="Email"
                value=""
                required
                autoComplete="off"
                className="w-[100%] p-2"
              />
            </div>
            <div className="mb-5">
              <textarea
                className="w-[100%] border p-2"
                placeholder="Enter your Message"
                name="Messages"
                required
                cols="50"
                rows="5"
                autoComplete="off"
              ></textarea>
            </div>

            <button className="border p-2 w-[100px] bg-blue-600 text-white cursor-pointer">
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
