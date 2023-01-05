import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import CalculoClt from "../calculoClt";
import CalculoPj from "../calculoPj";
import { Container, Selects, Modalidade, Button } from "./styled";

import Header from "./../../components/header";
export default function Home() {
  const [opcao, setOpcao] = useState("");

  const handleOptions = (option) => {
    setOpcao(option);

    if (opcao === "clt") {
      document.querySelector(".sign-in").classList.add("click");
      document.querySelector(".sign-up").classList.remove("click");
    } else {
      document.querySelector(".sign-up").classList.add("click");
      document.querySelector(".sign-in").classList.remove("click");
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Bem-vindo(a), Goker").start();
            }}
          />
        </h2>
        <Modalidade>
          <h4>Selecione a modalidade de contratação:</h4>
          <Selects>
            <Button className={"sign-in"} onClick={() => handleOptions("clt")}>
              CLT
            </Button>
            <Button className={"sign-up"} onClick={() => handleOptions("pj")}>
              PJ
            </Button>
          </Selects>
        </Modalidade>

        {opcao === "clt" ? <CalculoClt /> : <CalculoPj />}
      </Container>
    </div>
  );
}
