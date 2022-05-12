import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";

export default function AnimeCard({ item }) {
  return (
    <div className={styles.animeCard}>
      <Link to={"/anime/" + item.id}>
        <img
          width={300}
          height={450}
          className={styles.animeImage}
          src={item.poster}
          alt={item.title}
        />
      </Link>
    </div>
  );
}
