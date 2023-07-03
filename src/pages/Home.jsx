import MovieList from "../components/MovieCard/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import { RotateSpinner } from "react-spinners-kit";
import { useAppContext } from "../AppProvider";

export default function Home({ user }) {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const { dispatch, blocked, favorites } = useAppContext();

  return (
    <div className="home">
      <SearchBar
        setData={setData}
        dataLoading={dataLoading}
        setDataLoading={setDataLoading}
        favorites={favorites}
        blocked={blocked}
      />
      {data && <MovieList data={data} user={user} hideBlocked={true} />}
      {dataLoading && (
        <div className="spinner">
          <RotateSpinner size={30} color="#000" loading={dataLoading} />
        </div>
      )}
    </div>
  );
}
