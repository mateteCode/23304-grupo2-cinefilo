import imagePath from "../assets/Imagen_no_disponible.svg";

export function concatenateWords(words) {
  return words.trim().replaceAll(" ", "+");
}

export function getPosterURL(poster) {
  return poster ? `https://image.tmdb.org/t/p/w500${poster}` : imagePath;
}

export function isEndOfScroll() {
  return (
    window.innerHeight + document.documentElement.scrollTop + 1 >=
    document.documentElement.scrollHeight
  );
}
