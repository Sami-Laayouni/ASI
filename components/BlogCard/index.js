import style from "./BlogCard.module.css";
import Link from "next/link";
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1); // Convert seconds to milliseconds
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export default function BlogCard({ value }) {
  return (
    <Link href={`/blogs/${value._id}`}>
      <div className={style.card}>
        <img className={style.image} src={value.image_link} alt="Blog Post" />
        <div className={style.details}>
          <h2 className={style.title}>{value.title}</h2>
          <p className={style.date}>{formatDate(value.createdAt)}</p>
          <p className={style.author}>By {value.author}</p>
        </div>
      </div>
    </Link>
  );
}
