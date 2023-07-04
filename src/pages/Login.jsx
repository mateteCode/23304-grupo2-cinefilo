import { Link } from "react-router-dom";
import { logInWithEmailAndPassword, signInWithGoogle } from "../API/firebase";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = ({ email, password }) => {
    logInWithEmailAndPassword(email, password);
  };
  const msgRequired = "Es requerido.";

  return (
    <div className="form">
      <form className="form__container" onSubmit={handleSubmit(handleLogin)}>
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
          <p className="form__error">{errors.email?.message}</p>
        </div>
        <div className="form__box">
          <input
            {...register("password", { required: msgRequired })}
            type="password"
            className="form__textBox"
            placeholder="Contraseñá"
          />
          <p className="form__error">{errors.password?.message}</p>
        </div>
        <button type="submit" className="form__btn">
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
      </form>
    </div>
  );
}
