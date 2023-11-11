import React from "react";
import BubbleAlert from "./BubbleAlert";
import CartList from "./CartList";
//import useCart from "../hooks/useCart";

const ShopCart = ({ carro, esCarroVisible, showCart, deleteProduct }) => {

  const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

  return (
    <div>
      <span className="bubble">
        {cantidad !== 0 
          ? <BubbleAlert value={cantidad} /> 
          : null
        }
      </span>
      <button onClick={showCart} className="btn btn-primary carro">
        Shop Cart
      </button>
      {esCarroVisible
        ? <CartList 
            carro={carro} 
            deleteProduct={deleteProduct}
          />
        : null
      }
    </div>
  );
};

export default ShopCart;
