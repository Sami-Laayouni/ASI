// components/MediaCard.js
import Link from "next/link";
import styles from "./MediaCard.module.css";

const MediaCard = ({ media }) => {
  if (media.media_type != "VIDEO") {
    return (
      <Link id={media.permalink} href={media.permalink} target="_blank">
        <div className={styles.card}>
          <>
            {" "}
            <img src={media.media_url} alt="Instagram Post" />
            <div className={styles.overlay}></div>
          </>
        </div>
      </Link>
    );
  }
};

export default MediaCard;
