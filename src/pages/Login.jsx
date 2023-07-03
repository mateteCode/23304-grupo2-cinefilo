import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logInWithEmailAndPassword, signInWithGoogle } from "../API/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <input
          type="password"
          className="form__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseñá"
        />
        <button
          className="form__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Acceder
        </button>
        <button className="form__btn form__google" onClick={signInWithGoogle}>
          Acceder con Google
        </button>
        <div className="form__link">
          <Link to="/reset">Olvidé mi contraseña</Link>
        </div>
        <div className="form__link">
          ¿No tenés una cuenta? <Link to="/register">Registrate</Link> ahora.
        </div>
      </div>
    </div>
  );
}
