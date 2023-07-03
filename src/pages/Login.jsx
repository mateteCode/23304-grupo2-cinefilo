import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../API/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

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
        <div>
          <Link to="/reset">Olvidé mi contraseña</Link>
        </div>
        <div>
          ¿No tenés una cuenta? <Link to="/register">Registrate</Link> ahora.
        </div>
      </div>
    </div>
  );
}
