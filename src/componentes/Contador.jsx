import * as React from 'react';
import '../hojas-estilos/Contador.css'

class ContadorProps {
    numeroClicks: number;
}

const Contador: React.FunctionComponent<ContadorProps> = (props) => {
    return (
        <div className='p-3'>
            <div className='text-white d-flex justify-content-center contador-fuente border border-3 border-danger d-flex p-2'>
                {props.numeroClicks}
            </div>
        </div>);
};

export default Contador;
