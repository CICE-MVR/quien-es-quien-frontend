import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login when not loggedin", () => {
  render(<App />);

  const enterButton = screen.getByRole("button", { name: /entrar/i });
  const registerButton = screen.getByRole("button", { name: /registrarme/i });

  expect(enterButton).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});
