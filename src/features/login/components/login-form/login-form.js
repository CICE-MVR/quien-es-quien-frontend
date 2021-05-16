import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^[^@]+@[^@]+\.[^@]+$/,
        })}
      />
      {errors.email?.type === "required" && <p>Your email is required</p>}
      {errors.email?.type === "pattern" && <p>Please enter a valid email</p>}

      <input
        name="password"
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && <p>Please fill in your password</p>}
      <button>Login</button>
    </form>
  );
};

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};
