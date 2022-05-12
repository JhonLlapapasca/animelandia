/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//data
import { getRecomendado } from "../data";
//components

//styles
import styles from "../styles/Details.module.css";
import "../styles/Details.css";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

export default function AnimeDetails() {
  function clickVideo() {
    let listVideo = document.querySelectorAll(".vid");
    let mainVideo = document.querySelector(".video");
    listVideo.forEach((iframe) => {
      iframe.onclick = () => {
        listVideo.forEach((vid) => vid.classList.remove("active"));
        iframe.classList.add("active");
        if (iframe.classList.contains("active")) {
          let src = iframe.children[0].getAttribute("href");
          mainVideo.src = src;
        }
      };
    });
  }
  let params = useParams();
  let recomendado = getRecomendado(parseInt(params.animeId));
  return (
    <div>
      <Container className="my-2">
        <Link to="/" style={{ textDecoration: "1rem" }}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          Inicio
        </Link>{" "}
        /
        <span>
          {" "}
          Estas viendo: <strong>{recomendado.title}</strong>
        </span>
      </Container>
     
      <div
        className={styles.main_imagen}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0.5) 100%),url(${recomendado.background})`,
        }}
      >
        <Container className="mb-4">
          <h3 className={styles.title_anime}>{recomendado.title}</h3>
          <p className={styles.information_anime}>{recomendado.information}</p>
        </Container>
      </div>
      
      <Container className="my-4">
        <Row>
          <Col md={12} lg={8}>
            <div className="ratio ratio-16x9">
              <iframe
                src={recomendado.trailer}
                className="video"
                allowFullScreen
              />
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className={styles.episodes_anime}>
              <h3>Episodios:</h3>
              <div className="vid active" onClick={clickVideo}>
                <a href={recomendado.trailer} frameBorder="0"></a>
                <p>Trailer</p>
              </div>

              {recomendado.episodes.map((episode) => (
                <div key={episode.id} className="vid" onClick={clickVideo}>
                  <a href={episode.src} frameBorder="0"></a>
                  <p>Episodio: {episode.id}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div style={{ width: 660, height: "auto" }}></div>
      </Container>
    </div>
  );
}
