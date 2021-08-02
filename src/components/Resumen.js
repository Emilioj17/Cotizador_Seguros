import React from 'react';
import styled from '@emotion/styled';

const DivTerciario = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    grid-area: Resumen;
    background-color: #008B8B;
    border:2px;
    border-style: outset;
    border-color: #37ebe6;
    text-align: center;
    color: white;
    padding-top: 15px;
    padding-bottom: 15px;
`

const Resumen = ({marca, year, plan}) => {
    return (
        <DivTerciario>
            <h2>Resumen de Cotización</h2>
            <p>Marca: {marca}</p>
            <p>Plan: {plan}</p>
            <p>Año del Auto: {year}</p>
        </DivTerciario>
    );
}
 
export default Resumen;