import React from "react";
import Select from "react-select";
import Typewriter from "typewriter-effect";
import { Container, Selects, Linha, } from "./styled";

export default function Home() {
  const options = [
    { value: "pj", label: "PJ" },
    { value: "clt", label: "CLT" },
  ];
  return (
    <Container>
      <h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Bem-vindo, Goker").start();
          }}
        />
      </h2>
      
      <h4>Selecione a modalidade de contratação:</h4>
      <Selects>
        <Select options={options} />
      </Selects>
      <Linha>
        <div>
          <h4>Digite o salario CLT:</h4>
          <input placeholder="Digite..." type={"number"}></input>
        </div>
        <div>
          <h4>Beneficio Flash</h4>
          <input placeholder="Digite..." type={"number"}></input>
        </div>
        <div>
          <h4>Imposto+Beneficio(conta aqui+modal)</h4>
        </div>
      </Linha>
      <button>Calcular</button>

      <h2>Total: $00000</h2>
      {/* <Linha>
        <div>
          <h4>Digite o salario PJ:</h4>
          <input placeholder="Digite..." type={"number"}></input>
        </div>
        <div>
          <h4>Beneficio Flash</h4>
          <input placeholder="Digite..." type={"number"}></input>
        </div>
        <div>
          <h4>Outros</h4>
          <input placeholder="Digite..." type={"number"}></input>
        </div>
      </Linha>
      <button>Calcular</button>
      <h2>Total GOK: $00000</h2> */}
    </Container>
  );
}
