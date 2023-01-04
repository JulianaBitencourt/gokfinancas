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
  const [salario, setSalario] = useState("");
  const [beneficio, setBeneficio] = useState("");
  const [outros, setOutros] = useState("");
  const [resultado, setResultado] = useState("");

  const calculo = () => {};

  return (
    <Container>
      <Linha>
        <div>
          <Titulo>Digite o salario PJ:</Titulo>
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
          <Titulo>Outros valores </Titulo>
          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"number"}
            // value={outros}
            onChange={(e) => setOutros(e.target.value)}
          />
        </div>
      </Linha>
      <Button onClick={calculo}>Calcular</Button>

      <Result>Total: R${resultado}</Result>
    </Container>
  );
}
