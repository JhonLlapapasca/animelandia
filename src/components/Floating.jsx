import { Link } from "react-router-dom";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//styles
import styles from "../styles/Floating.module.css"
export default function CircleSoporte() {
  return (
    <div className={styles.floating}>
      <Link to="">
        <FontAwesomeIcon icon="fa-solid fa-question" />
      </Link>
    </div>
  );
}
