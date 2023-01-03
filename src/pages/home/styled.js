import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 3rem;
  h2 {
    margin: 2rem;
  }
  h4 {
    margin: 1rem;
  }
`;

export const Button = styled.button`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0.4rem;
  margin: 1rem;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.7rem;
  font-weight: bold;
  border: none;
  color: ${(props) => props.theme.background};
  font-size: 1.3rem;
`;

export const Selects = styled.section`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.background};
`;

export const Modalidade = styled.section`
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-left: 10rem;
  margin-right: 10rem;
  @media (max-width: 800px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;
