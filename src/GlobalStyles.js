import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 body {
  height: 100vh;
  background: ${(props) => props.theme.background};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size:18px;
  color: ${(props) => props.theme.text};
 }

 button{
  cursor: pointer;
 }

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-color:${(props) => props.theme.primary};
  text-decoration:none;
}
`;
