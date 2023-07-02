import MovieList from "../components/MovieCard2/MovieList";
import { useAppContext } from "../AppProvider";

export default function Favorites({ user }) {
  const { dispatch, favorites} = useAppContext();
  return (
    <div className="favorites">
      {favorites && (
        <MovieList
          data={favorites}
          user={user}
        />
      )}
    </div>
  );
}
