import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { logout, uploadFile, getUserPhoto, getUserName } from "../API/firebase";
import userPhotoDefault from "../assets/user_photo.png";

import { FaSearch } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { BiSolidHide } from "react-icons/bi";

export default function User({ user }) {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  //const navigate = useNavigate();

  const handleUploadBtn = async (e) => {
    try {
      const urlFile = await uploadFile(e.target.files[0], user?.uid);
      setPhoto(urlFile);
    } catch (err) {
      console.log("Error al subir archivo");
    }
  };

  useEffect(() => {
    //if (!user) return navigate("/");
    console.log("Fetchear la primera vez");
    getUserName(user?.uid).then((n) => {
      setName(n);
    });
    getUserPhoto(user?.uid).then((ph) => {
      ph ? setPhoto(ph) : setPhoto(userPhotoDefault);
    });
  }, []);

  return (
    <div className="page-center">
      <div className="carduser">
        <div className="carduser__profile">
          <img className="carduser__picture" src={photo} alt="Foto de perfil" />
          <div className="carduser__info">
            <h2 className="carduser__username">{name}</h2>
            <p className="carduser__email">{user?.email}</p>
            <div className="carduser__stats">
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <FaSearch />
                </div>
                <p className="carduser__value">25</p>
              </div>
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <AiFillHeart />
                </div>
                <p className="carduser__value">10</p>
              </div>
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <BiSolidHide />
                </div>
                <p className="carduser__value">5</p>
              </div>
              <div className="carduser__stat">
                <div className="carduser__icon">
                  <FiMessageSquare />
                </div>
                <p className="carduser__value">15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carduser__btns">
          {/* <button class="carduser__btn-photo">Cambiar imagen</button> */}
          <input
            type="file"
            hidden
            id="upload-btn"
            onChange={handleUploadBtn}
          />
          <label forhtml="upload-btn" className="carduser__btn-photo">
            Choose File
          </label>
          <button className="carduser__btn-logout" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
