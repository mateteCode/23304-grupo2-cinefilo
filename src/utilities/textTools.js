import imagePath from "../assets/Imagen_no_disponible.png";

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

export function getYear(date) {
  return date.slice(0, 4);
}

export function getRatingFixed(rating) {
  return rating.toFixed(1);
}
