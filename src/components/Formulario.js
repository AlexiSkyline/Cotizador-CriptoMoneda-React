import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useCriptomoneda } from '../Hooks/useCriptomoneda';
import { useMoneda } from '../Hooks/useMoneda';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

export const Formulario = () => {

    const [ listaCripto, setListaCripto ] = useState([]);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estado Unidos' },
        { codigo: 'MXM', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
    ]

    // * Utilizar useMoneda
    const [ moneda, SelectMonedas ] = useMoneda('Elige tu Moneda: ', '',MONEDAS);

    // * Utilizar useCriptomoneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu Criptomoneda', '',listaCripto);

    // * Ejecutar llamado a la API
    useEffect( () => {
        const consultarAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const resultado = await axios.get( url );

            setListaCripto( resultado.data.Data );
        }
        consultarAPI();
    }, []);

    return (
        <form>
            <SelectMonedas />
            
            <SelectCripto />

           <Boton 
                type="submit"
                value="Calcular"
           /> 
        </form>
    )
}
