import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="username"
        placeholder="Username"
        {...register("username", {
          required: true,
        })}
      />
      {errors.username?.type === "required" && <p>Please choose a username</p>}
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
      <button>Register</button>
    </form>
  );
};

RegisterForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};
