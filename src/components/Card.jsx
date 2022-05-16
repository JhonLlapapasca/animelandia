//styles
import styles from "../styles/Card.module.css";
//react
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <div className={styles.animeCard}>
      <Link to={"/" + item.category + "/" + item.id}>
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
