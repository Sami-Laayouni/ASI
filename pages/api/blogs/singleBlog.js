import ASIBlogs from "../../../Models/Blogs";
import { connectDB } from "../../../utils/db";

export default async function handler(req, res) {
  const { id } = req.body;
  await connectDB();
  try {
    const Blog = await ASIBlogs.findOne({ _id: id });
    res.status(200).send(Blog);
  } catch (error) {
    res.status(500).send(error);
  }
}
