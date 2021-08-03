import { useState } from 'react';
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Total from "./components/Total";
import styled from '@emotion/styled';

const DivPrincipal = styled.div`
  height: 100vh;
  display:grid;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 1fr 9fr 8fr 2fr;
  grid-template-areas:
  "Titulo Titulo Titulo"
  ". Centro ."
  ". Resumen ."
  ". Total .";
`

const Titulo = styled.h1`
  padding: 5px;
  grid-area: Titulo;
  text-align:center;
  color: white;
  background-color: #37ebe6;
  margin: 0;
`

function App() {
  const [marca, setMarca] = useState("");
  const [year, setYear] = useState(2000);
  const [plan, setPlan] = useState("Básico");
  const [total, setTotal] = useState(0);
  const [spinner, setSpinner] = useState(false);

  return (
    <DivPrincipal>
      <Titulo>Cotizador de Seguros</Titulo>
      <Formulario
        marca={marca}
        setMarca={setMarca}
        year={year}
        setYear={setYear}
        plan={plan}
        setPlan={setPlan}
        setTotal={setTotal}
        setSpinner={setSpinner}
      />
      <Resumen
        marca={marca}
        year={year}
        plan={plan}
        spinner={spinner}
      />
      <Total
        total={total}
      />
    </DivPrincipal>
  );
}

export default App;
