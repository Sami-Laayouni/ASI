import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  image_link: {
    type: String,
    required: true,
  },
  importance_rank: {
    type: Number,
    required: true,
  },
});

let Faculty;
try {
  Faculty = mongoose.model("Faculty");
} catch {
  Faculty = mongoose.model("Faculty", facultySchema);
}
export default Faculty;
