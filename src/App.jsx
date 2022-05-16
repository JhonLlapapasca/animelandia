import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Styles

// Pages
import AnimeDetails from "./pages/AnimeDetails";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

// Components
import Footer from "./components/Footer";
import NavbarAnimelandia from "./components/NavbarAnimelandia";
import Floating from "./components/Floating"


// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faReact, faFontAwesome);

export default function App() {
  return (
    <>
      <Router>
        <NavbarAnimelandia />
        <Floating />
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/serie/:animeId" element={<AnimeDetails />} />
            <Route exact path="/movie/:movieId" element={<MovieDetails />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}
