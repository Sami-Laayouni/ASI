import style from "./BlogCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1); // Convert seconds to milliseconds
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export default function BlogCard({ value, type }) {
  const router = useRouter();
  return (
    <Link href={`/blogs/${value._id}`}>
      <div className={style.card} style={{ position: "relative" }}>
        {type == "admin" && (
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push(`/edit/${value._id}`);
            }}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              background: "var(--accent-color)",
              border: "none",
              outline: "none",
              color: "white",
              padding: "15px 15px",
              cursor: "pointer",
            }}
            color="white"
            size={30}
          >
            Edit
          </button>
        )}
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
