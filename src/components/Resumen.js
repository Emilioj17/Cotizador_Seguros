import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import '../spinner.css';

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

const Resumen = ({ marca, year, plan, spinner }) => {

    return (
        <DivTerciario>
            {spinner ?
                (<div class="spinner"></div>
                ) : (
                    <Fragment>
                        <h2>Resumen de Cotización</h2>
                        <p>Marca: {marca}</p>
                        <p>Plan: {plan}</p>
                        <p>Año del Auto: {year}</p>
                </Fragment>
                )}
        </DivTerciario>
    );
}
 
export default Resumen;