import { useState } from "react";

const useCart = () => {
  const [carro, setCarro] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [esCarroVisible, setCarroVisible] = useState(false);

  const addToCart = (game) => {
    if (carro.find((x) => x.id === game.id)) {
      const newCart = carro.map((x) => x.id === game.id 
        ? ({
          ...x,
          cantidad: x.cantidad + 1,
          })
        : x
      )
      setCarro(newCart)
    }else{
      setCarro([
        ...carro,
        {
          ...game,
          cantidad: 1,
        }
      ])
    }
    setCantidad(cantidad + 1)
  }
  
  const showCart = () => {
    if(!carro.length){
      return 
    }
    setCarroVisible(!esCarroVisible)
  }
  
  const deleteProduct = (id) => {
    const product = carro.find((x) => x.id === id)
    if(product.cantidad > 1){
      const newCart = carro.map((x) => x.id === id
      ? ({
          ...x,
          cantidad: x.cantidad - 1,
        })
      : x
      ) 
      setCarro(newCart)
    }else{
      const newCart = carro.filter((x) => x.id !== id)
      setCarro(newCart)
    }
  }

  return [carro, addToCart, esCarroVisible, showCart, deleteProduct]; 
}



export default useCart 