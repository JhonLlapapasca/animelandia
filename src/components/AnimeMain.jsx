import styles from "../styles/Details.module.css";
import { Container } from "react-bootstrap";
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
        <p className={styles.information_anime}>{item.information}</p>
      </Container>
    </div>
  );
}
