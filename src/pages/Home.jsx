import MovieList from "../components/MovieCard/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import { RotateSpinner } from "react-spinners-kit";

export default function Home({
  user,
  favorites,
  setFavorites,
  blocked,
  setBlocked,
}) {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  return (
    <div className="home">
      <SearchBar
        setData={setData}
        dataLoading={dataLoading}
        setDataLoading={setDataLoading}
        favorites={favorites}
        blocked={blocked}
      />
      {data && (
        <MovieList
          data={data}
          user={user}
          setFavorites={setFavorites}
          favorites={favorites}
          setBlocked={setBlocked}
          blocked={blocked}
          setData={setData}
        />
      )}
      {dataLoading && (
        <div className="spinner">
          <RotateSpinner size={30} color="#000" loading={dataLoading} />
        </div>
      )}
    </div>
  );
}
