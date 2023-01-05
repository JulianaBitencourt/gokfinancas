import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  border-width: medium;
  border-style: solid;
  border-color: ${(props) => props.theme.foreground};
  border-radius: 1rem;
  width: 40rem;
  @media (max-width: 600px) {
    width: 100%;
  }
  .inputs {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1.2rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: none;
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.backgroundLight};
  }
`;

export const Titulo = styled.h4`
  margin: 1rem;
`;

export const Button = styled.button`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0.9rem;
  width:15rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.6rem;
  font-weight: bold;
  border: none;
  color: ${(props) => props.theme.background};
  font-size: 1.3rem;
`;
export const Result = styled.h2`
  text-align: center;
`;

export const Linha = styled.section`
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerInput = styled.div`
  padding: 0.6rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: none;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.backgroundLight};
`;
