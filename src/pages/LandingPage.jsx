//data
import { getAvances, getRecomendados, getMovies } from "../data";
//bootstrap
import { Container } from "react-bootstrap";
//components
import Card from "../components/Card";
import AnimeMain from "../components/AnimeMain";
//styles
import styles from "../styles/Carousel.module.css";
export default function LandingPage() {
  let recomendados = getRecomendados();
  let avances = getAvances();
  let movies = getMovies();
  return (
    <div>
      {avances.map((avance) => (
        <AnimeMain key={avance.id} item={avance} />
      ))}
      <Container className="my-3">
        <h2>Animes</h2>
        <div className={styles.carousel}>
          {recomendados.map((recomendado) => (
            <Card key={recomendado.id} item={recomendado} />
          ))}
        </div>
        <h2>Peliculas</h2>
        <div className={styles.carousel}>
          {movies.map((movie) => (
            <Card key={movie.id} item={movie} />
          ))}
        </div>
      </Container>
    </div>
  );
}
