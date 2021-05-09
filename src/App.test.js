import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login when not loggedin", () => {
  render(<App />);
  // screen.getByText(/learn react/i);
  const linkElement = screen.getByRole("button", { name: /login/i });
  expect(linkElement).toBeInTheDocument();
});
