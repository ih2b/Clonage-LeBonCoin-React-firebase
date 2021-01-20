import React from 'react'
import styled from "styled-components";
import './Search.css'
const Select = styled.select`
  width: 100%;
  background: white;
  color: gray;
  font-size: 20px;
  padding: 12px 20px;
  margin: 8px 0;
  option {
    width: 100%;
  height: 35px;
  background: white;
  color: gray;
  font-size: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;


function Search() {
    return (
        <div className="search">
            <div className="radioinput">
                <input type='radio' name='a' checked/>
                <label for="Offres">Offres</label>
                <input type='radio' name='a'/>
                <label for="Demandes">Demandes</label>
            </div>
            <div className="inputs">
                <Select name="categoris" id="categoris">
                    <option value="">Catégoris</option>
                    <option value="Emploi">Emploi</option>
                    <option value="véhicule">véhicule</option>
                    <option value="Mode">Mode</option>
                    <option value="Maison">Maison</option>
                </Select>
                <Input type="text" placeholder="Que recherchez-vous" />
                <Input type="text" placeholder="Saisissez une ville et un rayon" />
            </div>
        </div>
    )
}

export default Search
