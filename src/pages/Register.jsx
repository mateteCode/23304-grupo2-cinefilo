import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../API/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  /*   useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]); */

  return (
    <div className="form">
      <div className="form__container">
        <input
          type="text"
          className="form__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
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
          placeholder="Contraseña"
        />
        <button className="form__btn" onClick={register}>
          Registrarse
        </button>
        <button className="form__btn form__google" onClick={signInWithGoogle}>
          Registrarse con Google
        </button>

        <div>
          ¿Ya tenés una cuenta? <Link to="/login">Accede</Link> ahora.
        </div>
      </div>
    </div>
  );
}
