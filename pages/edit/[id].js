import style from "../../styles/Default.module.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Edit() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const id = router.query.id;
      const response = await fetch("/api/blogs/singleBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setTitle(data.title);
        setAuthor(data.author);
        setContent(data.html);
      }
    }
    if (router.query.id) {
      fetchData();
    }
  }, [router]);
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
          Edit Blog
        </h1>
      </section>
      <form
        id="write"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "100px",
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          document.getElementById("submit").innerText = "Saving...";
          const response = await fetch("/api/blogs/editBlog", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: router.query.id,
              title: title,
              author: author,
              content: content,
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
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Edit title of Blog"
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
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          placeholder="Edit Author of article"
        />

        <ReactQuill
          id="reactQuill"
          theme="snow"
          placeholder="Edit your text"
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
          Edit
        </button>
      </form>
    </>
  );
}
