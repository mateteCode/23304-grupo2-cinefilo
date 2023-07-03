import MovieList from "../components/MovieCard/MovieList";
import { useAppContext } from "../AppProvider";

export default function Favorites({ user }) {
  const { favorites } = useAppContext();
  return (
    <div className="favorites">
      {favorites && <MovieList data={favorites} user={user} />}
    </div>
  );
}
