// Bootstrap
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className={styles.footer}>
      <Container>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-react" />
          Animelandia - {getCurrentYear()}
        </span>
      </Container>
    </footer>
  );
}
