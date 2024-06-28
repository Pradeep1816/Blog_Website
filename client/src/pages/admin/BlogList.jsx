import React from "react";
import { NavLink } from "react-router-dom";

function BlogList({ blogs }) {
  return (
    <div className="p-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Thumnail
              </th>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <figure>
                    <img src={blog.imageURL} alt="" className="h-16" />
                  </figure>
                </th>
                <td class="px-6 py-4">{blog.title}</td>
                <td class="px-6 py-4">{blog.category}</td>
                <td class="px-6 py-4">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td class="px-6 py-4">
                  <NavLink
                    href="#"
                    class="font-medium text-white hover:underline"
                  >
                    Delete
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogList;
