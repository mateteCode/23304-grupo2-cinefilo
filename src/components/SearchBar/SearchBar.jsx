const APIKEY = "8f578cdecb8c15112d8837ddfb9c6838";

import { useEffect, useState } from "react";
import {
  concatenateWords,
  isEndOfScroll,
  getPosterURL,
  getYear,
  getRatingFixed,
} from "../../utilities/textTools";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useAppContext } from "../../AppProvider";

export default function SearchBar() {
  const [loadMoreData, setLoadMoreData] = useState(false);
  const {
    dispatch,
    data,
    dataLoading,
    textSearch,
    page,
    totalPages,
    totalResults,
    blocked,
    favorites
  } = useAppContext();
  let isEmpty = textSearch === "";

  const handleSearchBtn = () => {
    dispatch({ type: "SET_PAGE", value: 1 });
    dispatch({ type: "RESET_DATA" });
  };

  const handleScroll = () => {
    if (isEndOfScroll()) {
      setLoadMoreData(true);
    }
  };

  const fetchData = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${value}&page=${page}&language=es-AR`
    )
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        const newData = json.results.map((item) => {
          const {
            id,
            title,
            overview,
            poster_path,
            release_date,
            vote_average,
          } = item;
          const newItem = {
            id,
            title,
            overview,
            poster_path: getPosterURL(poster_path),
            release_date: getYear(release_date),
            vote_average: getRatingFixed(vote_average),
            favorite: favorites.find((fav) => fav.id === item.id) !== undefined,
            blocked:
              blocked.find((block) => block.id === item.id) !== undefined,
          };
          return newItem;
        });
        dispatch({ type: "ADD_DATA", value: newData });
        dispatch({ type: "SET_TOTALPAGES", value: json.total_pages });
        dispatch({ type: "SET_TOTALRESULTS", value: json.total_results });
      });
  };

  useEffect(() => {
    console.log(
      `page: ${page} loadMoreData: ${loadMoreData} totalPages: ${totalPages}`
    );
    if (page == 1 || (page > 1 && !dataLoading && loadMoreData)) {
      dispatch({ type: "SET_DATALOADING", value: true });
      setTimeout(() => {
        fetchData(concatenateWords(textSearch));
        dispatch({ type: "SET_DATALOADING", value: false });
        setLoadMoreData(false);
        if (page < totalPages || totalPages === 0) {
          dispatch({ type: "SET_PAGE", value: page + 1 });
        } else {
          dispatch({ type: "SET_PAGE", value: null });
          dispatch({ type: "SET_TOTALPAGES", value: 0 });
        }
      }, 1500);
    }
  }, [page, loadMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="search-box">
      <input
        type="text"
        value={textSearch}
        placeholder="Escriba la búsqueda..."
        onChange={(e) => {
          dispatch({ type: "SET_TEXTSEARCH", value: e.target.value });
        }}
      />
      <div className="search-btn" disabled={isEmpty} onClick={handleSearchBtn}>
        <FaSearch />
      </div>
      <div
        className="cancel-btn"
        disabled={isEmpty}
        onClick={() => {
          //dispatch({ type: "SET_TEXTSEARCH", value: "" });
          dispatch({ type: "RESET_SEARCH" });
        }}
      >
        <FaTimes />
      </div>
      <div className="search-results">
        {totalResults > 0 && <p>{totalResults} peliculas encontradas</p>}
      </div>
    </div>
  );
}
