import express from "express";
import { getAllBlogs, postCreate } from "../controller/blogController.js";
const router = express.Router();

router.post("/post", postCreate);
router.get("/all-post", getAllBlogs);

export default router;
