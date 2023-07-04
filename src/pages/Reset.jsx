import { Link } from "react-router-dom";
import { sendPasswordReset } from "../API/firebase";
import { useForm } from "react-hook-form";

export default function Reset() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReset = ({ email }) => {
    console.log("resetear");
    sendPasswordReset(email);
  };
  const msgRequired = "Es requerido.";

  return (
    <div className="form">
      <form className="form__container" onSubmit={handleSubmit(handleReset)}>
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

        <button type="submit" className="form__btn">
          Restablecer la contraseña
        </button>
        <div className="form__link">
          ¿No tenés una cuenta? <Link to="/register">Registrate</Link> ahora.
        </div>
      </form>
    </div>
  );
}
