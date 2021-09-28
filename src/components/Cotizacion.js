import React from 'react'

export const Cotizacion = ({ resultado }) => {

    if( Object.keys( resultado ).length === 0) return null;
    return (
        <div>
            <p>El precio es de: <span>{ resultado.PRICE }</span></p>
            <p>Precio más alto del dia es de: <span>{ resultado.HIGHDAY }</span></p>
            <p>Precio más bajo del dia es de: <span>{ resultado.LOWDAY }</span></p>
            <p>Variación últimas 24 horas es de: <span>{ resultado.CHANGEPCT24HOUR }</span></p>
            <p>Última Actualizacion es de: <span>{ resultado.LASTUPDATE }</span></p>
        </div>
    )
}
