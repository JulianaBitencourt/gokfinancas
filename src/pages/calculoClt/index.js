import React from "react";
import { useState } from "react";

import {
  Titulo,
  Linha,
  Input,
  Button,
  Container,
  Result,
} from "./../../components/calcStyles/styled";

export default function CalculoClt() {
  const [salario, setSalario] = useState(0);
  const [beneficio, setBeneficio] = useState(0);
  const [imposto, setImposto] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calculo = () => {};

  return (
    <Container>
      <Linha>
        <div>
          <Titulo>Digite o salario CLT:</Titulo>
          <Input
            placeholder="Digite o salario..."
            type={"number"}
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
          ></Input>
        </div>
        <div>
          <Titulo>Beneficio Flash</Titulo>
          <Input
            placeholder="Digite o valor..."
            type={"number"}
            value={beneficio}
            onChange={(e) => setBeneficio(e.target.value)}
          ></Input>
        </div>
        <div>
          <Titulo>Imposto + Beneficio</Titulo>
          <Input
            placeholder="Digite o valor..."
            type={"number"}
            value={imposto}
            onChange={(e) => setImposto(e.target.value)}
          ></Input>
        </div>
      </Linha>
      <Button onClick={calculo}>Calcular</Button>
      <Result>Total:{resultado}</Result>
    </Container>
  );
}
