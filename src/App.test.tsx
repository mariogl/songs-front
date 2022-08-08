import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "./utils/renderWithProviders";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a header with 'My Songs' inside", () => {
      const titleText = /my songs/i;

      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const title = screen.queryByRole("heading", {
        name: titleText,
        level: 1,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user visits the '/' route", () => {
    test("Then it should display a header with 'Songs Homepage' inside", () => {
      const titleText = /songs homepage/i;
      const initialPath = "/";

      renderWithProviders(
        <MemoryRouter initialEntries={[initialPath]}>
          <App />
        </MemoryRouter>
      );

      const title = screen.getByRole("heading", {
        name: titleText,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user visits the '/songs' route", () => {
    test("Then it should display a header with 'Songs' inside", () => {
      const titleText = /songs list/i;
      const initialPath = "/songs";

      renderWithProviders(
        <MemoryRouter initialEntries={[initialPath]}>
          <App />
        </MemoryRouter>
      );

      const title = screen.getByRole("heading", {
        name: titleText,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Songs' link", () => {
    test("Then it should redirect to '/songs'", async () => {
      const initialPath = "/";

      renderWithProviders(
        <MemoryRouter initialEntries={[initialPath]}>
          <App />
        </MemoryRouter>
      );

      const songsLink = screen.getByRole("link", {
        name: /songs/i,
      });

      userEvent.click(songsLink);

      const songsListTitle = await screen.findByRole("heading", {
        name: /songs list/i,
      });

      expect(songsListTitle).toBeInTheDocument();
    });
  });
});
