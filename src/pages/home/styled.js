import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  h2 {
    margin: 2rem;
  }
  h4 {
    margin: 1rem;
  }
  .sign-in.click{
  background-color:${(props) => props.theme.foreground};
  color:${(props) => props.theme.text};
}

.sign-up.click{
  background-color: ${(props) => props.theme.foreground};
  color:${(props) => props.theme.text};
}
`;

export const Button = styled.button`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0.4rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
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
  width: 40rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
