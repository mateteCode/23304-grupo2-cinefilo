import { MovieInfo } from "./MovieInfo";
import { Rating } from "./Rating";
import { getPosterURL } from "../../utilities/textTools";
export const Movie = ({ infos }) => {
  return (
    <div
      className="movie"
      style={{ backgroundImage: `url(${getPosterURL(infos.poster_path)})` }}
    >
      <h2 className="movie__title">{infos.title}</h2>
      <span className="movie__description">{infos.overview}</span>
      <div className="movie__infos">
        <MovieInfo name="duration" value={infos.duration} />
        <MovieInfo name="year" value={infos.release_date} />
      </div>
      <div className="movie__imdb">
        <Rating rating={Math.round(infos.rating)} />
        <a href={infos.imdbLink} className="movie__imdb-button" target="blank">
          {" "}
          IMDb{" "}
        </a>
      </div>
    </div>
  );
};
