import ASIBlogs from "../../../Models/Blogs";
import { connectDB } from "../../../utils/db";

export default async function handler(req, res) {
  const { author, title, html, image_link } = req.body;
  try {
    await connectDB();
    const newBlog = new ASIBlogs({
      author: author,
      title: title,
      html: html,
      image_link: image_link,
      createdAt: Date.now(),
    });
    const savedBlogs = await newBlog.save();
    res.status(200).send(savedBlogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
