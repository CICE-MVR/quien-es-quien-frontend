import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import { LoginForm } from "./login-form";

const createLoginInfo = () => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

test("submitting the form calls onClick with the email and password", async () => {
  const handleOnClick = jest.fn();
  const { email, password } = createLoginInfo();

  render(<LoginForm onClick={handleOnClick} />);

  const emailInput = screen.getByPlaceholderText(
    /quierojugar@quienesquien\.com/i
  );
  const passwordInput = screen.getByPlaceholderText(/contraseña/i);
  const loginButton = screen.getByRole("button", { name: /a jugar!/i });

  userEvent.type(emailInput, email);
  userEvent.type(passwordInput, password);

  userEvent.click(loginButton);

  // wait for react hook form
  await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));

  expect(handleOnClick).toHaveBeenCalledWith({ email, password });
  expect(handleOnClick).toHaveBeenCalledTimes(1);
});

test("submitting the form without email shows error", async () => {
  const handleOnClick = jest.fn();
  const { password } = createLoginInfo();

  render(<LoginForm onClick={handleOnClick} />);

  const passwordInput = screen.getByPlaceholderText(/contraseña/i);
  const loginButton = screen.getByRole("button", { name: /a jugar!/i });

  userEvent.type(passwordInput, password);

  userEvent.click(loginButton);

  // wait for react hook form
  await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));

  expect(screen.getByText(/ingresa tu email/i)).toBeInTheDocument();
});

test("submitting the form without password shows error", async () => {
  const handleOnClick = jest.fn();
  const { email } = createLoginInfo();

  render(<LoginForm onClick={handleOnClick} />);

  const emailInput = screen.getByPlaceholderText(
    /quierojugar@quienesquien\.com/i
  );
  const loginButton = screen.getByRole("button", { name: /a jugar!/i });

  userEvent.type(emailInput, email);

  userEvent.click(loginButton);

  // wait for react hook form
  await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));

  expect(screen.getByText(/ingresa tu password/i)).toBeInTheDocument();
});

test("submitting the form with and invalid email shows error", async () => {
  const handleOnClick = jest.fn();
  const email = "invalid@email";
  const { password } = createLoginInfo();

  render(<LoginForm onClick={handleOnClick} />);

  const emailInput = screen.getByPlaceholderText(
    /quierojugar@quienesquien\.com/i
  );
  const passwordInput = screen.getByPlaceholderText(/contraseña/i);
  const loginButton = screen.getByRole("button", { name: /a jugar!/i });

  userEvent.type(emailInput, email);
  userEvent.type(passwordInput, password);

  userEvent.click(loginButton);

  // wait for react hook form
  await waitFor(() => expect(screen.queryAllByRole("alert")).toHaveLength(0));

  expect(screen.getByText(/ingresa un email valido/i)).toBeInTheDocument();
});
