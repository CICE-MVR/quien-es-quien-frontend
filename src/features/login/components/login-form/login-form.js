import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import cn from "classnames";
import styles from "./login-form.module.css";

export const LoginForm = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onClick(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {errors.email?.type === "required" && (
        <p className={cn("staticText", styles.errors)}>Ingresa tu email</p>
      )}
      {errors.email?.type === "pattern" && (
        <p className={cn("staticText", styles.errors)}>
          Ingresa un email valido
        </p>
      )}
      <input
        className="input"
        name="email"
        placeholder="quierojugar@quienesquien.com"
        {...register("email", {
          required: true,
          pattern: /^[^@]+@[^@]+\.[^@]+$/,
        })}
      />

      {errors.password && (
        <p className={cn("staticText", styles.errors)}>Ingresa tu password</p>
      )}
      <input
        className="input"
        name="password"
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: true })}
      />
      <button className="button">A jugar!</button>
    </form>
  );
};

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};
