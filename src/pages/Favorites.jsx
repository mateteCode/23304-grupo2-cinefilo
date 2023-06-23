import MovieList from "../components/MovieCard2/MovieList";

export default function Favorites({
  favorites,
  user,
  setFavorites,
  setBlocked,
  blocked,
}) {
  return (
    <div className="favorites">
      {favorites && (
        <MovieList
          data={favorites}
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
