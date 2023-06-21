import MovieList from "../components/MovieCard/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";
import { RotateSpinner } from "react-spinners-kit";

export default function Home() {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  return (
    <div className="home">
      <SearchBar
        setData={setData}
        dataLoading={dataLoading}
        setDataLoading={setDataLoading}
      />
      {data && <MovieList data={data} />}
      {dataLoading && (
        <div className="spinner">
          <RotateSpinner size={30} color="#000" loading={dataLoading} />
        </div>
      )}
    </div>
  );
}
