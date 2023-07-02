import { Movie } from "./Movie";

export default function MovieList({ data, user }) {
  const moviesList = data.map((movie) => (
    <Movie key={movie.id} movie={movie} user={user} />
  ));
  return <div className="movies__container">{moviesList}</div>;
}
