import style from "../../styles/Default.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Tools() {
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
        <ul className={style.grid}>
          <Link href="https://noteswap.org" target="_blank">
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
                src="/assets/images/Rescources/tools/circle.png"
                alt="Noteswap"
                width={100}
                height={110}
              />
              <h1 style={{ textAlign: "center" }}>Noteswap</h1>
            </li>
          </Link>

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
              src="/assets/logo/logo.png"
              alt="Example"
              width={100}
              height={110}
            />
            <h1 style={{ textAlign: "center" }}>Example</h1>
          </li>
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
              src="/assets/logo/logo.png"
              alt="Example"
              width={100}
              height={110}
            />
            <h1 style={{ textAlign: "center" }}>Example</h1>
          </li>
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
              src="/assets/logo/logo.png"
              alt="Example"
              width={100}
              height={110}
            />
            <h1 style={{ textAlign: "center" }}>Example</h1>
          </li>
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
              src="/assets/logo/logo.png"
              alt="Example"
              width={100}
              height={110}
            />
            <h1 style={{ textAlign: "center" }}>Example</h1>
          </li>
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
              src="/assets/logo/logo.png"
              alt="Example"
              width={100}
              height={110}
            />
            <h1 style={{ textAlign: "center" }}>Example</h1>
          </li>
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
              src="/assets/logo/logo.png"
              alt="Example"
              width={100}
              height={110}
            />
            <h1 style={{ textAlign: "center" }}>Example</h1>
          </li>
        </ul>
      </section>
    </>
  );
}
