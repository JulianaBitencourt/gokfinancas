import React from "react";
import { useState } from "react";
import CurrencyInput from "react-currency-masked-input";

import {
  Titulo,
  Linha,
  Button,
  Container,
  Result,
} from "./../../components/calcStyles/styled";

export default function CalculoClt() {
  const [salario, setSalario] = useState(0);
  const [beneficio, setBeneficio] = useState("");
  const [imposto, setImposto] = useState(0);
  const [resultado, setResultado] = useState("");

  const calculo = () => {};

  return (
    <Container>
      <Linha>
        <div>
          <Titulo>Digite o salario CLT:</Titulo>

          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"number"}
            // value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Beneficio Flash</Titulo>
          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"number"}
            // value={beneficio}
            onChange={(e) => setBeneficio(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Imposto + Beneficio</Titulo>
          <Titulo>R$ {imposto}</Titulo>
        </div>
      </Linha>
      <Button onClick={calculo}>Calcular</Button>
      <Result>Total: R$ {resultado}</Result>
    </Container>
  );
}
