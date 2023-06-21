export const Rating = ({ rating }) => {
  let stars = [];
  for (let i = 1; i < 11; i++) {
    let klass = "fa fa-star";
    if (rating >= i && rating !== null) {
      klass = "fa fa-star checked";
    }
    stars.push(
      <i style={{ direction: i % 2 === 0 ? "rtl" : "ltr" }} className={klass} />
    );
  }
  return <div className="movie__rating">{stars}</div>;
};
