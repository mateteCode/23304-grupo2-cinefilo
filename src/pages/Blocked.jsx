import MovieList from "../components/MovieCard2/MovieList";

export default function Blocked({
  favorites,
  user,
  setFavorites,
  setBlocked,
  blocked,
}) {
  return (
    <div className="blocked">
      {blocked && (
        <MovieList
          data={blocked}
          user={user}
          setFavorites={setFavorites}
          favorites={favorites}
          setBlocked={setBlocked}
          blocked={blocked}
        />
      )}
    </div>
  );
}
