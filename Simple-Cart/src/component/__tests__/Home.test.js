import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("should render home component", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});
