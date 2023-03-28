import React from "react";

const CartList = ({ carro }) => {

    return (
        <div className="cart-list">
            <ul className="cart-ul">
                {carro.map(x => 
                    <li className="cart-li" key={x.id}> 
                        <img src={x.imagen} alt={x.nombre} width='30' height='30'/> 
                        {x.nombre}
                        <span> {x.cantidad} </span> 
                    </li>    
                )}
            </ul>
        </div>
    )
}

export default CartList