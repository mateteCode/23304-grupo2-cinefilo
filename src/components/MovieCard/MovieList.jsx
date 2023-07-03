import { Movie } from "./Movie";

export default function MovieList({ data, user, hideBlocked = false }) {
  const moviesList = data.map((movie) => (
    <Movie key={movie.id} movie={movie} user={user} hideBlocked={hideBlocked} />
  ));
  return <div className="movies__container">{moviesList}</div>;
}
