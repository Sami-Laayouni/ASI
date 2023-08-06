import Faculty from "../../../Models/Faculty";

export default async function handler(req, res) {
  const { full_name, role, category, bio, image_link, importance_rank } =
    req.body;
  try {
    const newFaculty = new Faculty({
      full_name: full_name,
      role: role,
      category: category,
      bio: bio,
      image_link: image_link,
      importance_rank: importance_rank,
    });
    await newFaculty.save();
    res.status(200).send("Worked");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
