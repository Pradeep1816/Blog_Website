import React from "react";

function Footer() {
  return (
    <div className="bg-stone-900 text-white flex flex-col items-center p-10">
      <div className="grid md:grid-cols-3 w-3/4 m-auto gap-5">
        <div>
          <ul>
            <li>Featured Blogs</li>
            <li>Most Viewed</li>
            <li>Readers Choice</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Forum</li>
            <li>Support</li>
            <li>Recent Posts</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Privacy</li>
            <li>About Us</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h1>All Rights Reserved @Practice 2024</h1>
      </div>
    </div>
  );
}

export default Footer;
