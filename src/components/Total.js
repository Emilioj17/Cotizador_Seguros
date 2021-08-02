import React from 'react';
import styled from '@emotion/styled';

const DivCuaternario = styled.div`
    margin-bottom: 15px;
    grid-area: Total;
    background-color: #37ebe6;
    border:2px;
    border-color: #008B8B;
    border-style: outset;
    text-align: center;
    padding: 15px;
    color: #008B8B;
`

const Total = ({total}) => {
    return (
        <DivCuaternario>EL TOTAL ES: ${total}</DivCuaternario>
    );
}
 
export default Total;