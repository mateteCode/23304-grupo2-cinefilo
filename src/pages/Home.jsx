import MovieList from "../components/MovieCard/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { RotateSpinner } from "react-spinners-kit";
import { useAppContext } from "../AppProvider";

export default function Home({ user }) {
  const { blocked, favorites, data, dataLoading } = useAppContext();

  return (
    <div className="home">
      <SearchBar />
      {data && <MovieList data={data} user={user} hideBlocked={true} />}
      {dataLoading && (
        <div className="spinner">
          <RotateSpinner size={30} color="#000" loading={dataLoading} />
        </div>
      )}
    </div>
  );
}
