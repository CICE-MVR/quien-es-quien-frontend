import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import cn from "classnames";
import styles from "./register-form.module.css";

export const RegisterForm = ({ onClick }) => {
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
      {errors.username?.type === "required" && (
        <p className={cn("staticText", styles.errors)}>
          Escoge un nombre, como quieres que te llamen?
        </p>
      )}
      <input
        className="input"
        name="username"
        placeholder="Nickname"
        {...register("username", {
          required: true,
        })}
      />
      {errors.email?.type === "required" && (
        <p className={cn("staticText", styles.errors)}>Ingresa tu email</p>
      )}
      {errors.email?.type === "pattern" && (
        <p className={cn("staticText", styles.errors)}>
          Ingresa un email válido
        </p>
      )}
      <input
        className="input"
        name="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[^@]+@[^@]+\.[^@]+$/,
        })}
      />

      {errors.password && (
        <p className={cn("staticText", styles.errors)}>Ingresa tu contraseña</p>
      )}
      <input
        className="input"
        name="password"
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: true })}
      />
      <button className="button">Registrarme</button>
    </form>
  );
};

RegisterForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};
