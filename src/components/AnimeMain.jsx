//styles
import styles from "../styles/Details.module.css";
//bootstrap
import { Container } from "react-bootstrap";
//react
import { Link } from "react-router-dom";
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AnimeMain({ item }) {
  return (
    <div
      className={styles.main_imagen}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0.5) 100%),url(${item.background})`,
      }}
    >
      <Container className="mb-4">
        <h3 className={styles.title_anime}>{item.title}</h3>
        <Link to={"/" + item.category + "/" + item.id}>
          {" "}
          <button className={styles.btn_anime}>
            <FontAwesomeIcon icon="fa-play" />
            Ver Ahora
          </button>{" "}
        </Link>
      </Container>
    </div>
  );
}
