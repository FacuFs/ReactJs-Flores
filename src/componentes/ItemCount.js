import { Link } from "react-router-dom";
const { useState } = require("react")


const ItemCount = ({stock, inicial, onAdd})=>{
    const [contador, setContador]=useState(inicial);
    const [stockRestante, setStock]= useState(stock)
    

    const sumarCont = ()=>{
        if (contador<stock) {
            setContador(parseInt(contador)+1);
        }
    }
    const restarCont = ()=>{
        if (contador>inicial) {
            setContador(contador-1);
        }
    }
    const compra = () => {
        //console.log(input.value)
  
        console.log("agrega Item al carro");
    }





    return(
        <>

        
            <div className="containerContador">
                <div className="containerContador__control">
                    <div onClick={restarCont}>
                        <p>-</p>
                    </div>
                    <div className="contador">
                        <p> {contador}</p>
                    </div>
                    <div onClick={sumarCont}>
                        <p>+</p>
                    </div>
                </div>
                <button onClick={compra} onClick={()=> onAdd(contador)}>Agregar al carrito</button>
            </div>
            
          
        
        </>
    )
}

export default ItemCount;