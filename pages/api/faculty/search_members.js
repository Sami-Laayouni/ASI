import Faculty from "../../../Models/Faculty";
import { connectDB } from "../../../utils/db";

export default async function handler(req, res) {
  const query = [];
  let options = { maxTimeMS: 20000 };

  const body = req.body;
  const { name, belongs } = body;
  res.setHeader("Cache-Control", `public, max-age=120`);
  if (name) {
    options = {
      $match: {
        full_name: { $regex: name, $options: "i" },
      },
    };
    query.push(options);
  }
  if (belongs) {
    options = {
      $match: {
        category: { $regex: belongs, $options: "i" },
      },
    };
    query.push(options);
  }
  query.push({
    $sort: {
      importance_rank: -1,
    },
  });
  query.push({
    $project: {
      full_name: 1,
      role: 1,
      category: 1,
      bio: 1,
      image_link: 1,
    },
  });

  try {
    await connectDB();
    const result = await Faculty.aggregate(query);
    if (result) {
      const final = {
        faculty: result,
      };
      res.status(200).send(final);
    } else {
      res.status(200).send({});
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
