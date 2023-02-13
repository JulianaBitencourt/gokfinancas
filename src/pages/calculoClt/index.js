import React from "react";
import { useState } from "react";
import CurrencyInput from "./../../components/input-currency/currencyInput";
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
  const [imposto, setImposto] = useState("");
  const [resultado, setResultado] = useState(null);

  function calculo() {
    const convertSalary = parseFloat(
      salario.replace("R$", "").replace(",", "")
    );

    const convertBenefits = parseFloat(
      beneficio.replace("R$", "").replace(",", "")
    );

    const tax = (convertSalary * 70) / 100;

    setImposto(tax);

    const result = convertSalary + tax + convertBenefits;
    setResultado(result);
  }
  return (
    <Container>
      <Linha>
        <div>
          <Titulo>Digite o salário CLT:</Titulo>

          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"text"}
            value={salario}
            inputMode={"numeric"}
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Benefício Flash</Titulo>
          <CurrencyInput
            className="inputs"
            placeholder="R$ 0.00"
            type={"text"}
            value={beneficio}
            onChange={(e) => setBeneficio(e.target.value)}
          />
        </div>
        <div>
          <Titulo>Imposto + Benefício</Titulo>
          <Titulo>
            {imposto.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Titulo>
        </div>
      </Linha>
      {salario && beneficio ? (
        <>
          <Button onClick={() => calculo()}>Calcular</Button>

          {resultado && (
            <Result>
              Total:{" "}
              {resultado?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Result>
          )}
        </>
      ) : null}
    </Container>
  );
}
