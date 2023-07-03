import { useEffect, useState } from "react";
import { useAppContext } from "../../AppProvider";
import { getComments } from "../../API/firebase";
import { formatDate } from "../../utilities/timeTools";
import { FaTimes } from "react-icons/fa";
import { RotateSpinner } from "react-spinners-kit";
import userPhotoDefault from "../../assets/user_photo.png";

const CommentsPopup = ({ user }) => {
  const [comment, setComment] = useState("");
  const [loading, setloading] = useState(true);
  const { dispatch, currentMovie, comments, userName } = useAppContext();
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    dispatch({
      type: "SAVE_COMMENT",
      value: {
        date: formatDate(today),
        name: userName,
        comment,
        id: today.getTime(),
        userId: user.uid,
      },
    });
    setComment("");
  };

  useEffect(() => {
    getComments(currentMovie.id)
      .then((comments) => {
        dispatch({
          type: "GET_COMMENTS_COMPLETED",
          value: comments ? comments : [],
        });
        setloading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los comentarios:", error);
      });
  }, []);

  useEffect(() => {
    console.log(`comments: ${comments}`);
  }, [comments]);

  return (
    <div className="popup">
      <div className="popup__box">
        <span
          className="popup__closebtn"
          onClick={() => dispatch({ type: "HIDE_COMMENTS" })}
        >
          <FaTimes />
        </span>
        <div
          className="popup__movie"
          style={{ backgroundImage: `url(${currentMovie.poster_path})` }}
        >
          <h2 className="popup__movie__title">{currentMovie.title}</h2>
          <div className="popup__movie_description">
            {currentMovie.overview}
          </div>
          <div className="popup__infos">
            <div>Rating {currentMovie.vote_average}</div>
            <div>Estreno {currentMovie.release_date}</div>
          </div>
        </div>
        <div className="popup__messages">
          <form action="" className="popup__form" onSubmit={handleSubmit}>
            <textarea
              className="popup__textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escribe tu comentario"
            ></textarea>
            <input
              className="popup__button"
              type="submit"
              disabled={comment === ""}
              value="Enviar comentario"
            />
          </form>

          <div className="spinner">
            <RotateSpinner size={30} color="red" loading={loading} />
          </div>

          <div className="popup__list">
            {comments &&
              comments.map((com) => (
                <div key={com.id} className="popup__item">
                  <p className="popup__comment">{com.comment}</p>
                  <div className="popup__details">
                    <div className="popup__user">
                      <img
                        src={userPhotoDefault}
                        alt="Foto de perfil"
                        className="popup__photo"
                      ></img>
                      <p>{com.name}</p>
                    </div>

                    <p className="popup__messages__list__date">{com.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentsPopup;
