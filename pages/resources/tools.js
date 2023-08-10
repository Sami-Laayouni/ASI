import style from "../../styles/Default.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Tools() {
  const [role, setRole] = useState("all");
  const tools = [
    {
      name: "Noteswap",
      image: "/assets/images/Rescources/tools/circle.png",
      url: "https://noteswap.org",
      role: "all",
    },
    {
      name: "Clever",
      image: "/assets/images/Rescources/tools/clever.jpg",
      url: "https://www.clever.com/",
      role: "all",
    },
    {
      name: "IXL",
      image: "/assets/images/Rescources/tools/ixl.png",
      url: "https://ixl.com/",
      role: "students",
    },
  ];
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
          Tools
        </h1>
        <p className={style.quote}>
          &quot;The only way to do great work is to love what you do.&quot; -
          Steve Jobs
        </p>
      </section>
      <section className={style.gridContainer}>
        <section className={style.selectRole}>
          <div
            onClick={() => {
              setRole("students");
            }}
          >
            Students
          </div>
          <div
            onClick={() => {
              setRole("teahcers");
            }}
          >
            Teachers
          </div>
        </section>
        <ul className={style.grid}>
          {tools.map(function (value) {
            if (value.role == "all" || value.role == role || role == "all") {
              return (
                <Link href={value.url} target="_blank">
                  <li
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "white",
                      height: "250px",
                      borderRadius: "8px",
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Image
                      src={value.image}
                      alt={value.name}
                      width={100}
                      height={100}
                    />
                    <h1 style={{ textAlign: "center" }}>{value.name}</h1>
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      </section>
    </>
  );
}
