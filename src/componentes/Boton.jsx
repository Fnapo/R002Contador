
import * as React from 'react';
import './../hojas-estilos/Boton.css';

class BotonProps {
    texto: string;
    esBotonClick: boolean;
    manejarClick: React.MouseEventHandler<HTMLButtonElement>; // función como propiedadd
}

const Boton: React.FunctionComponent<BotonProps> = (props) => {
    return (
        <button className={props.esBotonClick ? "btn col-3 btn-primary m-2" : "btn col-3 btn-danger m-2"}
            onClick={props.manejarClick}>
            {props.texto}
        </button>);
};

export default Boton;

