import { Link } from "react-router-dom";
//styles
import styles from "../styles/app.module.css";
// Bootstrap
import { Container } from "react-bootstrap";

export default function NavbarAnimelandia() {
  return (
    <header>
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className={styles.title}>Animelandia</h1>
        </Link>
      </Container>
    </header>
  );
}
