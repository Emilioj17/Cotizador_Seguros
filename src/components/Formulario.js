import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const DivSecundario = styled.div`
  grid-area: Centro;
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
  ""
  ""
  ""
  "Button Button";
`

const Formulario = ({ setMarca, setYear, setPlan }) => {
    return (
        <DivSecundario>
            <label htmlFor="Marca">Marca</label>
            <select name="Marca">
                <option value="Americano">Americano</option>
                <option value="Europeo">Europeo</option>
                <option value="Asiatico">Asiatico</option>
            </select>
            <label htmlFor="Year">Año</label>
            <select name="Year">
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
            </select>
            <div>
                Plan
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">HTML</label>
                <input type="radio" id="css" name="fav_language" value="CSS"/>
                <label for="css">CSS</label>
            </div>
            <button>Enviar</button>
        </DivSecundario>
    );
}
 
export default Formulario;