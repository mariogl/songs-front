import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import SongsListPage from "./SongsListPage";

describe("Given a SongsListPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a header with 'Songs list' inside", () => {
      const titleText = /songs list/i;

      renderWithProviders(<SongsListPage />);

      const title = screen.getByRole("heading", {
        name: titleText,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
