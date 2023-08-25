import { connectDB } from "../../../utils/db";
import Blogs from "../../../Models/Blogs";
/**
 * Update blog
 * @date 8/13/2023 - 4:41:15 PM
 *
 * @export
 * @async
 * @param {*} req
 * @param {*} res
 * @return {*}
 */
export default async function handler(req, res) {
  const { id, title, author, content } = req.body;

  if (req.method === "POST") {
    await connectDB();
    try {
      const updatedBlog = await Blogs.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            title: title,
            content: content,
            author: author,
          },
        },
        {
          new: true, // Set the new option to true to return the updated document
          useFindAndModify: false, // Add this option to use native findOneAndUpdate
        }
      ).lean();
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
