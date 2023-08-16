import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  image_link: {
    type: String,
    required: true,
  },
});

let ASIBlogs;
try {
  ASIBlogs = mongoose.model("ASIBlogs");
} catch {
  ASIBlogs = mongoose.model("ASIBlogs", blogsSchema);
}
export default ASIBlogs;
