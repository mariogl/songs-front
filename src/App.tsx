import { Navigate, Route, Routes } from "react-router-dom";
import { StyledContainer, StyledHeader } from "./App.styled";
import Navigation from "./components/Navigation/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";

const App = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledHeader className="main-header">
        <h1>My Songs</h1>
        <Navigation />
      </StyledHeader>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </StyledContainer>
  );
};

export default App;
