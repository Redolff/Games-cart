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
  
  const mostrarCarro = () => {
    if(!carro.length){
      return 
    }
    setCarroVisible(!esCarroVisible)
  }
  
  return [carro, addToCart, esCarroVisible, mostrarCarro]; 

}

export default useCart 