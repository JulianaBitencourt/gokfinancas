import React from "react";
import { useState } from "react";

import { Titulo, Linha, Input, Button, Container, Result } from "./styled";

export default function CalculoClt() {
  const [salario, setSalario] = useState(0);
  const [beneficio, setBeneficio] = useState(0);
  const [outros, setOutros] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calculo = () => {};

  return (
    <Container>
      <Linha>
        <div>
          <Titulo>Digite o salario PJ:</Titulo>
          <Input
            placeholder="Digite o salario PJ..."
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
          <Titulo>Outros valores </Titulo>
          <Input
            placeholder="Digite o valor..."
            type={"number"}
            value={outros}
            onChange={(e) => setOutros(e.target.value)}
          ></Input>
        </div>
      </Linha>
      <Button onClick={calculo}>Calcular</Button>

      <Result>Total:{resultado}</Result>
    </Container>
  );
}
