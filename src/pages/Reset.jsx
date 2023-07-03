import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordReset } from "../API/firebase";

export default function Reset() {
  const [email, setEmail] = useState("");

  return (
    <div className="form">
      <div className="form__container">
        <input
          type="text"
          className="form__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <button className="form__btn" onClick={() => sendPasswordReset(email)}>
          Restablecer la contraseña
        </button>
        <div className="form__link">
          ¿No tenés una cuenta? <Link to="/register">Registrate</Link> ahora.
        </div>
      </div>
    </div>
  );
}
