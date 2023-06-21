import { getPosterURL } from "../utilities/textTools.js";

export default function Movie({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
      <p>{movie.id}</p>
      <img
        src={getPosterURL(movie.poster_path)}
        alt={movie.path}
        width={200}
        height={350}
      />
    </div>
  );
}
