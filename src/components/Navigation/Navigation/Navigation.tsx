import { NavLink } from "react-router-dom";
import { StyledLinks } from "./Navigation.styled";

const Navigation = (): JSX.Element => {
  return (
    <nav className="main-navigation">
      <StyledLinks>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/songs">Songs</NavLink>
        </li>
        <li>
          <NavLink to="/new-song">New song</NavLink>
        </li>
      </StyledLinks>
    </nav>
  );
};

export default Navigation;
