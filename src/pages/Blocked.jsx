import MovieList from "../components/MovieCard/MovieList";
import { useAppContext } from "../AppProvider";

export default function Blocked({ user }) {
  const { dispatch, blocked } = useAppContext();
  return (
    <div className="blocked">
      {blocked && <MovieList data={blocked} user={user} />}
    </div>
  );
}
