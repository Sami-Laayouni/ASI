import Modal from "../Modal";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";
export default function UserInfo() {
  const { userInfoModal, userInfoModalInfo } = useContext(ModalContext);
  const [open, setOpen] = userInfoModal;
  const [data, setData] = userInfoModalInfo;
  return (
    <Modal
      isOpen={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <section
        style={{
          width: "50vw",
          display: "grid",
          gridTemplateColumns: "50% 50%",
        }}
      >
        <img
          style={{
            height: "82vh",
            width: "25vw",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          alt="Image"
          src={data?.image_link}
        ></img>
        <section style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "2rem", lineHeight: "10px" }}>
            {data?.full_name}
          </h1>
          {data?.category?.split(",").map(function (value, index) {
            return (
              <h2 key={index}>
                {value.trim() == "highschool"
                  ? "High School"
                  : value.trim() == "middleschool"
                  ? "Middle School"
                  : value.trim() == "elementary"
                  ? "Elementary"
                  : "Early Years"}
              </h2>
            );
          })}
          <h3>{data?.role}</h3>
          <p
            style={{
              whiteSpace: "pre-line",
              wordBreak: "break-word",
              paddingRight: "30px",
              lineHeight: "200%",
              width: "25vw",
              height: "50vh",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "50vh",
            }}
          >
            {data?.bio}
          </p>
        </section>
      </section>
    </Modal>
  );
}
