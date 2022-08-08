import { render } from "@testing-library/react";
import SongsContextProvider from "../store/contexts/SongsContextProvider";

const renderWithProviders = (component: JSX.Element, withRouter = false) => {
  const wrapper = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <SongsContextProvider>{children}</SongsContextProvider>
  );
  return render(component, { wrapper });
};

export default renderWithProviders;
