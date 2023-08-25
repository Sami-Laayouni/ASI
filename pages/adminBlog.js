import style from "../styles/Default.module.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import BlogCard from "../components/BlogCard";
export default function AdminBlog() {
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [blogs, setBlogs] = useState(null);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = async function () {
      // Check if the image is vertical (portrait)
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("/api/gcs/upload_image", {
        method: "POST",
        body: formData,
      });

      const { url } = await response.json();
      setUrl(url);
    };
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/blogs/getBlogs", {
        method: "GET",
      });
      if (response.ok) {
        setBlogs(await response.json());
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <section className={style.header}>
        <img
          src="/assets/images/About/download.jpg"
          alt="About Image"
          loading="eager"
          className={style.background}
        ></img>
        <h1 className={style.titleText} id="eager">
          Write a Blog
        </h1>
      </section>
      <form
        id="confirm"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            document.getElementById("adminPin").value ==
            process.env.NEXT_PUBLIC_ADMIN_PASSWORD
          ) {
            document.getElementById("confirm").style.display = "none";
            document.getElementById("write").style.display = "flex";
            document.getElementById("editBlog").style.display = "flex";
          } else {
            setError("Pin incorrect");
          }
        }}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Confirm</h1>
        <input
          style={{
            outline: "none",
            paddingLeft: "10px",
            lineHeight: "20px",
            borderRadius: "3px",
            border: "1px solid black",
          }}
          id="adminPin"
          placeholder="Enter Admin Pin"
          required
        ></input>
        <p>{error}</p>
        <button type="submit">Submit</button>
      </form>
      <form
        id="write"
        style={{
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "100px",
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          document.getElementById("submit").innerText = "Saving...";
          const response = await fetch("/api/blogs/createBlog", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: document.getElementById("title").value,
              author: document.getElementById("article").value,
              html: content,
              image_link: url,
            }),
          });
          if (response.ok) {
            document.getElementById("submit").innerText = "Saved";
          } else {
            document.getElementById("submit").innerText = await response.text();
          }
        }}
      >
        <input
          style={{
            outline: "none",
            border: "none",
            width: "65vw",
            marginTop: "20vh",
            borderBottom: "2px solid var(--accent-color)",
            lineHeight: "20px",
            fontSize: "20px",
          }}
          required
          id="title"
          placeholder="Enter title of Blog"
        />
        <input
          style={{
            outline: "none",
            border: "none",
            width: "65vw",
            marginTop: "5vh",
            borderBottom: "2px solid var(--accent-color)",
            lineHeight: "20px",
            fontSize: "20px",
          }}
          required
          id="article"
          placeholder="Author of article"
        />
        <span style={{ marginTop: "30px" }}>Upload cover picture</span>
        <input
          style={{ marginTop: "30px" }}
          accept="image/*"
          type="file"
          onChange={uploadImage}
          required
        />
        <ReactQuill
          id="reactQuill"
          theme="snow"
          placeholder="Start something wonderful..."
          value={content}
          onChange={(e) => setContent(e)}
          modules={{
            toolbar: [
              [{ size: ["small", false, "large", "huge"] }],
              [
                "bold",
                "italic",
                "underline",
                "strike",
                "image",
                { script: "super" },
                { script: "sub" },
              ],
              [{ color: [] }, { background: [] }],
              [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
              ["code-block"],

              ["clean"],
            ],
          }}
          style={{
            height: "700px",
            width: "65vw",
            marginTop: "50px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          id="submit"
          style={{
            marginTop: "15vh",
            padding: "15px 30px",
            outline: "none",
            cursor: "pointer",
            border: "none",
            background: "var(--accent-color)",
            color: "white",
          }}
        >
          Save
        </button>
      </form>
      <section
        id="editBlog"
        style={{
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Edit Blog</h1>
        {blogs?.map(function (value) {
          return <BlogCard key={value._id} type="admin" value={value} />;
        })}
        <br></br>
      </section>
    </>
  );
}
