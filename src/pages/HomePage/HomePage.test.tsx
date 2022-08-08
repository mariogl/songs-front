import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with 'Songs Homepage' inside", () => {
      const titleText = /songs homepage/i;

      render(<HomePage />);

      const title = screen.queryByRole("heading", {
        name: titleText,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
