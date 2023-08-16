// components/MediaCard.js
import Link from "next/link";
import styles from "./MediaCard.module.css";

const MediaCard = ({ media }) => {
  console.log(media);
  return (
    <Link href={media.permalink} target="_blank">
      <div className={styles.card}>
        <img src={media.media_url} alt="Instagram Post" />

        <div className={styles.overlay}></div>
      </div>
    </Link>
  );
};

export default MediaCard;
