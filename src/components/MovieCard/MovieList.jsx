import { Movie } from "./Movie";
import { useEffect } from "react";

export default function MovieList({
  data,
  user,
  setFavorites,
  favorites,
  setData,
  blocked,
  setBlocked,
}) {
  useEffect(() => {
    console.log("Cambio favorites");
    const newData = data.map((movie) => {
      if (favorites.find((fav) => fav.id === movie.id) !== undefined) {
        return { ...movie, favorite: true };
      } else {
        return { ...movie, favorite: false };
      }
    });
    setData(newData);
  }, [favorites]);

  useEffect(() => {
    console.log("Cambio blocked");
    const newData = data.map((movie) => {
      if (blocked.find((block) => block.id === movie.id) !== undefined) {
        return { ...movie, blocked: true };
      } else {
        return { ...movie, blocked: false };
      }
    });
    setData(newData);
  }, [blocked]);

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
