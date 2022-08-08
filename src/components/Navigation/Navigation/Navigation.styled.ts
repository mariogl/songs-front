import styled from "styled-components";

export const StyledLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 10px;

  a,
  a:visited {
    color: inherit;
  }
  .active {
    font-weight: bold;
  }
`;
