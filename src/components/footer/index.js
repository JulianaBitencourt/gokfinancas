import React from "react";
import { Container, Logo } from "./styled";
import pessoas from "./../../assets/galera.png";
export default function Footer() {
  return (
    <Container>
      <Logo src={pessoas} alt="Gokers" />
    </Container>
  );
}
