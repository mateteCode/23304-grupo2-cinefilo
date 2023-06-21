import { Movie } from "./Movie";

export default function MovieList({ data }) {
  const moviesList = data.map((movie) => (
    <Movie key={movie.id} infos={movie} />
  ));
  return <div className="movies__container">{moviesList}</div>;
}
