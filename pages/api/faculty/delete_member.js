import Faculty from "../../../Models/Faculty";

export default async function handler(req, res) {
  const { name } = req.body;
  try {
    await Faculty.findOneAndDelete({ full_name: name });
    res.status(200).send("Worked");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
