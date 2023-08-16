import style from "../styles/Default.module.css";
import { useState } from "react";
export default function Admin() {
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({
    earlyyears: false,
    elementary: false,
    middleschool: false,
    highschool: false,
    facultymember: false,
    officestaff: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  const getSelectedOptionsString = () => {
    return Object.entries(checkboxValues)
      .filter(([day, value]) => value === true)
      .map(([day, value]) => day)
      .join(", ");
  };

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

  return (
    <>
      {" "}
      <section className={style.header}>
        <img
          src="/assets/images/About/download.jpg"
          alt="About Image"
          loading="eager"
          className={style.background}
        ></img>
        <h1 className={style.titleText} id="eager">
          Admin
        </h1>
        <p className={style.quote}>
          &quot;The only way to do great work is to love what you do.&quot; -
          Steve Jobs
        </p>
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
            document.getElementById("add").style.display = "flex";
            document.getElementById("remove").style.display = "flex";
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
        id="add"
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "40px",
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          document.getElementById("button").innerText = "Publishing";
          const response = await fetch("/api/faculty/add_member", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: document.getElementById("full_name").value.trim(),
              role: document.getElementById("role").value,
              category: getSelectedOptionsString(),
              bio: document.getElementById("bio").value,
              image_link: url,
              importance_rank: document.getElementById("rank").value,
            }),
          });
          if (response.ok) {
            document.getElementById("button").innerText = "Published";
          }
        }}
      >
        <h1>Add new Faculty Member</h1>
        <input
          style={{
            outline: "none",
            paddingLeft: "10px",
            lineHeight: "20px",
            borderRadius: "3px",
            border: "1px solid black",
            width: "30%",
          }}
          placeholder="Enter full name"
          id="full_name"
          required
        />
        <input
          style={{
            outline: "none",
            paddingLeft: "10px",
            lineHeight: "20px",
            borderRadius: "3px",
            border: "1px solid black",
            marginTop: "20px",
            width: "30%",
          }}
          id="role"
          placeholder="Enter member role"
          required
        />
        <input
          style={{
            outline: "none",
            paddingLeft: "10px",
            lineHeight: "20px",
            borderRadius: "3px",
            border: "1px solid black",
            marginTop: "20px",
            width: "30%",
          }}
          id="rank"
          type="number"
          min={0}
          max={100}
          placeholder="Member importance (0-100)"
          required
        />
        <label>
          <input
            type="checkbox"
            name="earlyyears"
            value="early-years"
            checked={checkboxValues.earlyyears}
            onChange={handleCheckboxChange}
            style={{ marginTop: "50px" }}
          />
          Early Years
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="elementary"
            value="elementary"
            checked={checkboxValues.elementary}
            onChange={handleCheckboxChange}
          />
          Elementary
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="middleschool"
            value="middle-school"
            checked={checkboxValues.middleschool}
            onChange={handleCheckboxChange}
          />
          Middle School
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="highschool"
            value="high-school"
            checked={checkboxValues.highschool}
            onChange={handleCheckboxChange}
          />
          High School
        </label>
        <label>
          <input
            type="checkbox"
            name="officestaff"
            value="office-staff"
            checked={checkboxValues.officestaff}
            onChange={handleCheckboxChange}
            style={{ marginTop: "20px" }}
          />
          Office Staff
        </label>
        <label>
          <input
            type="checkbox"
            name="facultymember"
            value="faculty-member"
            checked={checkboxValues.facultymember}
            onChange={handleCheckboxChange}
            style={{ marginTop: "20px" }}
          />
          Faculty Member
        </label>
        <br />

        <textarea
          rows={5}
          cols={50}
          style={{
            outline: "none",
            paddingLeft: "10px",
            lineHeight: "20px",
            borderRadius: "3px",
            border: "1px solid black",
            marginTop: "20px",
            resize: "none",
            fontFamily: "Arial",
            width: "30%",
          }}
          placeholder="Enter member bio"
          id="bio"
          required
        />
        <input
          style={{
            marginTop: "20px",
          }}
          type="file"
          accept="image/*"
          onChange={uploadImage}
          required
        ></input>
        <button
          style={{
            marginTop: "20px",
            cursor: "pointer",
            outline: "none",
            color: "white",
            padding: "10px 20px",
            background: "var(--accent-color)",
            border: "0",
          }}
          type="submit"
          id="button"
        >
          Publish
        </button>
      </form>
      <form
        style={{
          width: "100%",
          height: "50vh",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        id="remove"
        onSubmit={async (e) => {
          e.preventDefault();
          document.getElementById("delete").innerText = "Deleting";
          const response = await fetch("/api/faculty/delete_member", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: document.getElementById("deleteName").value.trim(),
            }),
          });
          if (response.ok) {
            document.getElementById("delete").innerText = "Deleted";
          }
        }}
      >
        <h1>Remove Faculty Member</h1>
        <input
          style={{
            outline: "none",
            paddingLeft: "10px",
            lineHeight: "20px",
            borderRadius: "3px",
            border: "1px solid black",
            marginTop: "20px",
            width: "30%",
          }}
          id="deleteName"
          placeholder="Enter faculty member name"
          required
        ></input>
        <button
          style={{
            marginTop: "20px",
            cursor: "pointer",
            outline: "none",
            color: "white",
            padding: "10px 20px",
            background: "var(--accent-color)",
            border: "0",
          }}
          type="submit"
          id="delete"
        >
          Delete
        </button>
      </form>
    </>
  );
}
