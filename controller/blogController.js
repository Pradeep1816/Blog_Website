import blogModel from "../models/blogModel.js";

export const postCreate = (req, res) => {
  const { title, description, category, imageURL } = req.body;
  console.log(req.body);
  try {
    if (!title || !description || !category || !imageURL) {
      return res
        .status(404)
        .send({ success: true, messages: "All fields are requried" });
    }
    const newPost = new blogModel();
    newPost.title = title;
    newPost.description = description;
    newPost.category = category;
    newPost.imageURL = imageURL;
    newPost.save();
    res
      .status(200)
      .send({ success: true, messages: "Post create successfull" });
  } catch (error) {
    res.status(500).send({ sucess: false, message: "Post Creation Failed !" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    if (!blogs) {
      return res
        .status(404)
        .send({ success: false, message: "No Blogs Found" });
    }
    return res
      .status(200)
      .send({ success: true, totalBlogs: blogs.length, blogs });
  } catch (error) {}
};
