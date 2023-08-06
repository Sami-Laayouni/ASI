import style from "../../styles/Faculty.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ProfileCard from "../../components/ProfileCard";
export default function Faculty() {
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  function addRoutePath(route, value) {
    router.push(
      {
        query: {
          ...router.query,
          [route]: value,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }
  useEffect(() => {
    updateValue();
  }, [router.query]);

  async function updateValue() {
    const { query } = router;
    const { name, belongs } = query;
    const body = {
      name: name || null,
      belongs: belongs || null,
    };
    const response = await fetch(`/api/faculty/search_members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      const data = await response.json();
      setLoading(false);
      setData(data.faculty);
    } else {
      setLoading(false);
      setData({});
    }
  }
  return (
    <>
      <section className={style.grid}>
        <img
          src="/assets/images/Faculty/background.jpg"
          alt="Image"
          className={style.left}
        />
        <section className={style.right}>
          <h1>Meet The Team</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          </h2>
        </section>
      </section>
      <form
        className={style.input}
        onSubmit={(e) => {
          e.preventDefault();
          addRoutePath("name", document.getElementById("memberName").value);
        }}
      >
        <input id="memberName" placeholder="Search faculty members" required />
        <button type="submit">Search</button>
      </form>
      <section className={style.list}>
        <ul>
          <li
            onClick={() => {
              addRoutePath("belongs", "highschool");
            }}
          >
            High School
          </li>
          <li
            onClick={() => {
              addRoutePath("belongs", "middleschool");
            }}
          >
            Middle School
          </li>
          <li
            onClick={() => {
              addRoutePath("belongs", "elementary");
            }}
          >
            Elementary
          </li>
          <li
            onClick={() => {
              addRoutePath("belongs", "earlyyears");
            }}
          >
            Early Years
          </li>
        </ul>
      </section>
      <section>
        {loading && (
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </div>
        )}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
          }}
        >
          {data?.length > 0 &&
            data.map(function (value) {
              return <ProfileCard key={value._id} data={value} />;
            })}
        </section>

        {data?.length == 0 && (
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>No members found</p>
          </div>
        )}
      </section>
    </>
  );
}
