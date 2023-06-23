import { MovieInfo } from "./MovieInfo";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import {
  addFavorites,
  removeFavorites,
  addBlocked,
  removeBlocked,
} from "../../API/firebase";
import { BiHide, BiSolidHide } from "react-icons/bi";

export const Movie = ({
  infos,
  user,
  setFavorites,
  favorites,
  setBlocked,
  blocked,
}) => {
  infos.favorite = favorites.find((fav) => fav.id === infos.id) !== undefined;
  infos.blocked =
    blocked.find((blocked) => blocked.id === infos.id) !== undefined;
  const { id, title, overview, vote_average, release_date, poster_path } =
    infos;
  return (
    <div className="movie" style={{ backgroundImage: `url(${poster_path})` }}>
      <h2 className="movie__title">{title}</h2>
      <div className="movie__description">{overview}</div>
      <div className="movie__infos">
        <MovieInfo name="rating" value={vote_average} />
        <MovieInfo name="estreno" value={release_date} />
      </div>
      <div className="movie__buttons">
        <div
          className="movie__btn"
          onClick={() => {
            const newFavorite = {
              id,
              title,
              overview,
              vote_average,
              release_date,
              poster_path,
            };
            if (infos.favorite) {
              removeFavorites(user, newFavorite);
              console.log(favorites.length);
              const newFavorites = favorites.filter((fav) => {
                return infos.id !== fav.id;
              });
              console.log(newFavorites.length);
              setFavorites([...newFavorites]);
            } else {
              addFavorites(user, newFavorite);
              setFavorites((prev) => [...prev, newFavorite]);
            }
          }}
        >
          {infos.favorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
        <div className="movie__btn">
          <FiMessageSquare />
        </div>
        <div
          className="movie__btn"
          onClick={() => {
            const newBlock = {
              id,
              title,
              overview,
              vote_average,
              release_date,
              poster_path,
            };
            if (infos.blocked) {
              removeBlocked(user, newBlock);
              console.log(blocked.length);
              const newBlocked = blocked.filter((block) => {
                return infos.id !== block.id;
              });
              console.log(newBlocked.length);
              setBlocked([...newBlocked]);
            } else {
              addBlocked(user, newBlock);
              setBlocked((prev) => [...prev, newBlock]);
            }
          }}
        >
          {infos.blocked ? <BiSolidHide /> : <BiHide />}
        </div>
      </div>
    </div>
  );
};
