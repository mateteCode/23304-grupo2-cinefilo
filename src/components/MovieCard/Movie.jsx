import { MovieInfo } from "./MovieInfo";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { BiHide, BiSolidHide } from "react-icons/bi";
import {
  addFavorites,
  removeFavorites,
  addBlocked,
  removeBlocked,
} from "../../API/firebase";

import { useAppContext } from "../../AppProvider";

export const Movie = ({ movie, user, hideBlocked }) => {
  const { dispatch, blocked, favorites } = useAppContext();
  movie.favorite = favorites.find((fav) => fav.id === movie.id) !== undefined;
  movie.blocked =
    blocked.find((blocked) => blocked.id === movie.id) !== undefined;
  const { id, title, overview, vote_average, release_date, poster_path } =
    movie;

  const handleFavoriteBtn = () => {
    const newFavorite = {
      id,
      title,
      overview,
      vote_average,
      release_date,
      poster_path,
    };
    if (movie.favorite) {
      removeFavorites(user, newFavorite);
      const newFavorites = favorites.filter((fav) => {
        return movie.id !== fav.id;
      });
      dispatch({ type: "UPDATE_FAVORITES", value: newFavorites });
    } else {
      addFavorites(user, newFavorite);
      dispatch({
        type: "UPDATE_FAVORITES",
        value: [...favorites, newFavorite],
      });
    }
  };

  const handleBlockedBtn = () => {
    const newBlock = {
      id,
      title,
      overview,
      vote_average,
      release_date,
      poster_path,
    };
    if (movie.blocked) {
      removeBlocked(user, newBlock);
      const newBlocked = blocked.filter((block) => {
        return movie.id !== block.id;
      });
      dispatch({ type: "UPDATE_BLOCKED", value: newBlocked });
    } else {
      addBlocked(user, newBlock);
      dispatch({
        type: "UPDATE_BLOCKED",
        value: [...blocked, newBlock],
      });
    }
  };

  if (movie.blocked && hideBlocked) return;
  return (
    <div className="movie" style={{ backgroundImage: `url(${poster_path})` }}>
      <h2 className="movie__title">{title}</h2>
      <div className="movie__description">{overview}</div>
      <div className="movie__infos">
        <MovieInfo name="rating" value={vote_average} />
        <MovieInfo name="estreno" value={release_date} />
      </div>
      <div className="movie__buttons">
        <div className="movie__btn" onClick={handleFavoriteBtn}>
          {movie.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
        <div
          className="movie__btn"
          onClick={() => dispatch({ type: "SHOW_COMMENTS", value: movie })}
        >
          <FiMessageSquare />
        </div>
        <div className="movie__btn" onClick={handleBlockedBtn}>
          {movie.blocked ? <BiSolidHide /> : <BiHide />}
        </div>
      </div>
    </div>
  );
};
