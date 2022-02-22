import { Routes, Route } from "react-router-dom";
import { FavouritesProvider } from "./context/FavouritesContext";
import PokemonList from "./pages/PokemonList/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import { AppStyled } from "./styles";

const App = () => (
  <FavouritesProvider>
    <AppStyled>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:name" element={<PokemonDetail />} />
      </Routes>
    </AppStyled>
  </FavouritesProvider>
);

export default App;
