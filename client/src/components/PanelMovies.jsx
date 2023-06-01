import Movie from "./Movie";
export default function PanelMovies({ data }) {
  return (
    <div>
      {data.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </div>
  );
}
