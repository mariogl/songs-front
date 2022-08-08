import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display three links with 'Home', 'Songs' and 'New song'", () => {
      const links = ["Home", "Songs", "New song"];

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      links.forEach((link) => {
        const linkElement = screen.getByRole("link", { name: link });

        expect(linkElement).toBeInTheDocument();
      });
    });
  });
});
