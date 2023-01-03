import styled from "styled-components";
export const Container = styled.div`
  border-width: medium;
  border-style: solid;
  border-color: ${(props) => props.theme.foreground};
  border-radius: 1rem;
`;

export const Titulo = styled.h4`
  margin: 1rem;
`;
export const Input = styled.input`
  padding: 0.6rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: none;
  color: ${(props) => props.theme.background};
`;

export const Button = styled.button`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0.4rem;
  width: 14rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.6rem;
  font-weight: bold;
  border: none;
  color: ${(props) => props.theme.background};
  font-size: 1.3rem;
`;
export const Result = styled.h2`
  margin: 2rem;
`;

export const Linha = styled.section`
  display: grid;
  margin-top: 1rem;
  margin-bottom: 5rem;
  grid-template-columns: repeat(auto-fill, 340px);
  justify-content: center;
`;
