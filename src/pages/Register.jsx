import { Link } from "react-router-dom";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../API/firebase";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = ({ name, email, password }) => {
    registerWithEmailAndPassword(name, email, password);
  };

  const handleRegisterGoogle = () => {
    setShowErrors(false);
    signInWithGoogle();
  };
  const msgRequired = "Es requerido.";
  const [showErrors, setShowErrors] = useState(true);

  return (
    <div className="form">
      <form className="form__container" onSubmit={handleSubmit(handleRegister)}>
        <div className="form__box">
          <input
            {...register("name", { required: msgRequired })}
            type="text"
            className="form__textBox"
            placeholder="Nombre"
          />
          <p className="form__error">{showErrors && errors.name?.message}</p>
        </div>
        <div className="form__box">
          <input
            {...register("email", {
              required: msgRequired,
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "El correo electrónico no es válido",
              },
            })}
            type="text"
            className="form__textBox"
            placeholder="Correo electrónico"
          />
          <p className="form__error">{showErrors && errors.email?.message}</p>
        </div>
        <div className="form__box">
          <input
            {...register("password", {
              required: msgRequired,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  ),
              },
            })}
            type="password"
            className="form__textBox"
            placeholder="Contraseña"
          />
          <p className="form__error">
            {showErrors && errors.password?.type === "required" && msgRequired}
            {showErrors &&
              errors.password?.type === "checkLength" &&
              "Debe tener mínimo 6 caracteres."}
            {showErrors &&
              errors.password?.type === "matchPattern" &&
              "Usar minúscula, mayúscula, dígito y carácter especial."}
          </p>
        </div>

        <button type="submit" className="form__btn">
          Registrarse
        </button>
        <button
          className="form__btn form__google"
          onClick={handleRegisterGoogle}
        >
          Registrarse con Google
        </button>
        <div className="form__link">
          ¿Ya tenés una cuenta? <Link to="/login">Accede</Link> ahora.
        </div>
      </form>
    </div>
  );
}
