import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageURL: { type: String, requied: true },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema);

export default blogModel;
