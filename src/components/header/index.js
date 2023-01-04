import React from "react";
import { Container, Logo } from "./styled";
import logo from "./../../assets/logo.png";
export default function Header() {
  return (
    <Container>
      <Logo src={logo} alt="GOK" />
    </Container>
  );
}
