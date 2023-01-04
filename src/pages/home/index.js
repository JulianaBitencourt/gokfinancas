import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import CalculoClt from "../calculoClt";
import CalculoPj from "../calculoPj";
import { Container, Selects, Modalidade, Button } from "./styled";

export default function Home() {
  const [opcao, setOpcao] = useState("");

  return (
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
          <Button onClick={() => setOpcao("clt")}>CLT</Button>
          <Button onClick={() => setOpcao("pj")}>PJ</Button>
        </Selects>
      </Modalidade>

      {opcao === "clt" ? <CalculoClt /> : <CalculoPj />}
    </Container>
  );
}
