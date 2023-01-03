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

 button, a{
  border-radius: 0.2rem; 
  cursor: pointer;
  transition: 1s;
  :hover {
    transition: 0.5s;
    background-color: transparent;}
 }

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-color:#38D430;
  text-decoration:none;
  color:inherit;
}
`;
