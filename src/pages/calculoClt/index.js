import React from "react";
import { useState } from "react";
import CurrencyInput from './../../components/input-currency/currencyInput'
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
          <Titulo>Digite o salário CLT:</Titulo>

          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"text"}
            // value={salario}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Benefício Flash</Titulo>
          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"text"}
            // value={beneficio}
            onChange={(e) => setBeneficio(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Imposto + Benefício</Titulo>
          <Titulo>R$ {imposto}</Titulo>
        </div>
      </Linha>
      <Button onClick={calculo}>Calcular</Button>
      <Result>Total: R$ {resultado}</Result>
    </Container>
  );
}
