import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import {CalcularTotal} from "../Helper"

const DivSecundario = styled.div`
    margin-top: 20px;
    grid-area: Centro;
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "Label1 Select1"
    "Label2 Select2"
    "Div1 Div2"
    "Button Button";
`

const Boton = styled.button`
    border:5px;
    border-style: outset;
    border-color: #37ebe6;
    background-color: #008B8B;
    color: white;
    grid-area: Button;
`

const Selection = styled.select`
    height: 30px;
    -webkit-appearance: menulist-button;
`

const Labeling = styled.label`
    padding: 5px;
    padding-right: 15px;
`


const Formulario = ({ marca, setMarca, year, setYear, plan, setPlan, setTotal, setSpinner }) => {
    const handlerMarca = (e) => {
        const marca = e.target.value;
        setMarca(marca);
    }

    const handlerYear = (e) => {
        const year = e.target.value;
        setYear(year);
    }

    const handlerPlan = (e) => {
        const plan = e.target.value;
        setPlan(plan);
    }

    const handlerCotizar = (e) => {
        if (marca && year && plan) {
            setSpinner(true);
            setTotal(0);
                setInterval(() => {
                    setSpinner(false);
                    const total = CalcularTotal(marca, year, plan);
                    setTotal(total);
                }, 3000);
        }
    }

    return (
        <DivSecundario>
            <Labeling className="Label1" htmlFor="Marca">Marca</Labeling>
            <Selection className="Selection1" name="Marca" onClick={(e)=>handlerMarca(e)}>
                <option value="Americano">Americano</option>
                <option value="Europeo">Europeo</option>
                <option value="Asiatico">Asiatico</option>
            </Selection>
            <Labeling className="Label2" htmlFor="Year">Año</Labeling>
            <Selection className="Selection2" name="Year" onClick={(e)=>handlerYear(e)}>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
            </Selection>
            <Labeling className="Label2" className="Div1" htmlFor="Div">Plan</Labeling>
            <div className="Div2" name="Div">
                <input type="radio" id="html" name="fav_language" value="Básico" onClick={(e)=>handlerPlan(e)}/>
                <label for="html">Básico</label>
                <input type="radio" id="css" name="fav_language" value="Completo" onClick={(e)=>handlerPlan(e)}/>
                <label for="css">Completo</label>
            </div>
            <Boton className="Button2" onClick={(e)=>handlerCotizar(e)}>COTIZAR</Boton>
        </DivSecundario>
    );
}
 
export default Formulario;