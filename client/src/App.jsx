import "./App.css";
import { useState } from "react";
import SearchMovie from "./components/SearchMovie";
import PanelMovies from "./components/PanelMovies";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1>Peliculas</h1>
      <SearchMovie
        setData={setData}
        loading={loading}
        setLoading={setLoading}
      />
      {data && <PanelMovies data={data} />}
      {loading && <div>Cargando...</div>}
    </>
  );
}

export default App;
