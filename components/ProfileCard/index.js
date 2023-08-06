import style from "./profileCard.module.css";
import { useContext } from "react";
import ModalContext from "../../context/modalContext";
export default function ProfileCard({ data }) {
  const { userInfoModal, userInfoModalInfo } = useContext(ModalContext);
  const [open, setOpen] = userInfoModal;
  const [datas, setData] = userInfoModalInfo;
  return (
    <div className={style.container} onClick={() => {}}>
      <div
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        onClick={() => {
          setOpen(true);
          setData(data);
        }}
      >
        <img src={data?.image_link}></img>
      </div>
      <div className={style.contain}>
        <h1>{data?.full_name}</h1>

        {data?.category?.split(",").map(function (value, index) {
          return (
            <h3 key={index}>
              {value.trim() == "highschool"
                ? "High School"
                : value.trim() == "middleschool"
                ? "Middle School"
                : value.trim() == "elementary"
                ? "Elementary"
                : "Early Years"}
            </h3>
          );
        })}

        <h2>{data?.role}</h2>
      </div>
    </div>
  );
}
