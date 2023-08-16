import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "../../styles/Default.module.css";

export default function Blogs() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData(id) {
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
        setData(await response.json());
      }
    }
    const { id } = router.query;
    if (id) {
      getData(id);
    }
  }, [router]);

  return (
    <>
      <section className={style.header}>
        <img
          src={
            data?.image_link
              ? data?.image_link
              : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100%25' height='100%25' fill='${encodeURIComponent(
                  "#1c0d52"
                )}' /%3E%3C/svg%3E`
          }
          alt="About Image"
          loading="eager"
          className={style.background}
        ></img>
        <h1 className={style.titleText} id="eager">
          {data?.title ? data.title : "Loading..."}
        </h1>
        <p className={style.quote}>
          {data?.author ? `By: ${data?.author}` : ""}
        </p>
      </section>
      <section className={style.container}>
        <p>
          Blogs {">"} {data?.title ? data.title : "Loading..."}
        </p>
        <div dangerouslySetInnerHTML={{ __html: data?.html }}></div>
      </section>
    </>
  );
}
