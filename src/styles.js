import styled from "styled-components";

export const Main = styled.main`
  background: lightgray;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const East = styled.section`
  flex: 1;
  opacity: 0.1;
`;

export const West = styled.section`
  flex: 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: visible;
  z-index: 1;
`;
