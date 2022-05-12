import AnimeMain from "../components/AnimeMain";

import { getAvances, getRecomendados, getMovies } from "../data";
import { Container } from "react-bootstrap";
import AnimeCard from "../components/AnimeCard";
import MovieCard from "../components/MovieCard";
import styles from "../styles/animesGrid.module.css";
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
        <h1>Animes</h1>
        <div className={styles.carousel}>
          {recomendados.map((recomendado) => (
            <AnimeCard key={recomendado.id} item={recomendado} />
          ))}
        </div>
        <h1>Movies</h1>
        <div className={styles.carousel}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} item={movie} />
          ))}
        </div>
      </Container>
    </div>
  );
}
