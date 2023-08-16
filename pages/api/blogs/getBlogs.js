import ASIBlogs from "../../../Models/Blogs";
import { connectDB } from "../../../utils/db";

export default async function handler(req, res) {
  await connectDB();
  try {
    const latestBlogs = await ASIBlogs.find()
      .sort("-createdAt")
      .limit(6)
      .lean();
    res.status(200).send(latestBlogs);
  } catch (error) {
    res.status(500).send(error);
  }
}
