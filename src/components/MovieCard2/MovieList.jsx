import { Movie } from "./Movie";

export default function MovieList({
  data,
  user,
  setFavorites,
  favorites,
  blocked,
  setBlocked,
}) {
  const moviesList = data.map((movie) => (
    <Movie
      key={movie.id}
      infos={movie}
      user={user}
      setFavorites={setFavorites}
      favorites={favorites}
      setBlocked={setBlocked}
      blocked={blocked}
    />
  ));
  return <div className="movies__container">{moviesList}</div>;
}
