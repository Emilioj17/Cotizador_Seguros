import { useState } from 'react';
import './App.css';
import Formulario from "./components/Formulario";
import styled from '@emotion/styled';

const DivPrincipal = styled.div`
  display:grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 9fr;
  grid-template-areas:
  "Titulo Titulo Titulo"
  ". Centro .";
`

const Titulo = styled.h1`
  grid-area: Titulo;
  text-align:center;
  color: white;
  background-color: #37ebe6;
  padding: 0;
  margin: 0;
`

function App() {
  const [marca, setMarca] = useState("");
  const [year, setYear] = useState(2000);
  const [plan, setPlan] = useState("Básico");

  return (
    <DivPrincipal>
      <Titulo>Cotizador de Seguros</Titulo>
      <Formulario setMarca={setMarca} setYear={setYear} setPlan={setPlan}/>
    </DivPrincipal>
  );
}

export default App;
