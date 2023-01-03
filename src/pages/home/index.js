import React from 'react';
import Select from "react-select";
import {Container, Selects} from "./styled"
export default function Home() {
  const options = [
    { value: "pj", label: "PJ" },
    { value: "clt", label: "CLT" },
  ];
 return (
   <Container>
   <h2>Bem-vindo Goker</h2>
   <h4>Selecione a modalidade de contratação:</h4>
   <Selects>
 <Select options={options} />
 </Selects>
 <h4>Digite o salario CLT:</h4>
 <input placeholder='Digite...' type={"number"}></input>
 <h4>Beneficio Flash</h4>
 <input placeholder='Digite...' type={"number"}></input>
 <h4>Imposto+Beneficio(conta aqui+modal)</h4>
 <button>Calcular</button>
 <h2>Total: $00000</h2>

 <h4>Digite o salario PJ:</h4>
 <input placeholder='Digite...' type={"number"}></input>
 <h4>Beneficio Flash</h4>
 <input placeholder='Digite...' type={"number"}></input>
 <h4>Outros</h4>
 <input placeholder='Digite...' type={"number"}></input>
 <button>Calcular</button>
 <h2>Total GOK: $00000</h2>
   </Container>
 );
}