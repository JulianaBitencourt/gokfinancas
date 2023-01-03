import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 7rem;
  input {
    padding: 0.6rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin: 1rem;
    color: ${(props) => props.theme.background};
  }
  button {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 14rem;
    background-color: ${(props) => props.theme.primary};
    border-radius: 0.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.background};
    font-size: 1.2rem;
  }
  h2 {
    margin: 2rem;
  }
`;
export const Selects = styled.section`
  margin: 1rem;
  color: ${(props) => props.theme.background};
`;

export const Linha = styled.section`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  padding: 4rem;
  margin: 1rem;
`;
