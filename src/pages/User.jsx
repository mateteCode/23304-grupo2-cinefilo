import { logout, uploadFile } from "../API/firebase";
import { useAppContext } from "../AppProvider";
import { FaSearch } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { BiSolidHide } from "react-icons/bi";

export default function User({ user }) {
  const { dispatch, userPhoto, userName, blocked, favorites } = useAppContext();

  const handleUploadBtn = async (e) => {
    try {
      const urlFile = await uploadFile(e.target.files[0], user?.uid);
      dispatch({ type: "SET_USERPHOTO", value: urlFile });
    } catch (err) {
      console.log("Error al subir archivo");
    }
  };

  const handleLogoutBtn = () => {
    logout();
    dispatch({ type: "RESET_STATE" });
  };

  return (
    <div className="page-center">
      <div className="carduser">
        <div className="carduser__profile">
          <img
            className="carduser__picture"
            src={userPhoto}
            alt="Foto de perfil"
          />
          <div className="carduser__info">
            <h2 className="carduser__username">{userName}</h2>
            <p className="carduser__email">{user?.email}</p>
            <div className="carduser__stats">
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <FaSearch />
                </div>
                <p className="carduser__value">--</p>
              </div>
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <AiFillHeart />
                </div>
                <p className="carduser__value">{favorites.length}</p>
              </div>
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <BiSolidHide />
                </div>
                <p className="carduser__value">{blocked.length}</p>
              </div>
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <FiMessageSquare />
                </div>
                <p className="carduser__value">--</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carduser__btns">
          <input
            type="file"
            hidden
            id="upload-btn"
            onChange={handleUploadBtn}
          />
          <label htmlFor="upload-btn" className="carduser__btn-photo">
            Cambiar imagen
          </label>
          <button className="carduser__btn-logout" onClick={handleLogoutBtn}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
