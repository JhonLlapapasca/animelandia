import { Link } from "react-router-dom";

import DarkMode from "./Darkmode";

//styles
import styles from "../styles/Floating.module.css"
export default function CircleSoporte() {
  return (
    <div className={styles.floating}>
      <Link to="">
        <DarkMode />
      </Link>
    </div>
  );
}
