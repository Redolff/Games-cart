import { useState } from "react";

const useCart = () => {
  const [carro, setCarro] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const addToCart = (game) => {
    const existingGame = carro.find((item) => item.id === game.id);
    if (existingGame) {
      const newCart = carro.map((item) => {
        if (item.id === existingGame.id) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
      setCarro(newCart);
    } else {
      setCarro([...carro, { ...game, cantidad: 1 }]);
    }
    setCantidad(cantidad + 1);
  };
  console.log(carro);
  return [carro, addToCart];
};

export default useCart;

/*

let carro = []
const addToCart = (game) => {
    if(carro.find(x => x.id === game.id)){
        const newCarro = carro.map(x => x.nombre === game.nombre ? ({
            ...x,
            cantidad: x.cantidad + 1 
        }) 
        : (x))
        carro = newCarro
    }else{
        carro = carro.concat({
            ...game,
            cantidad: 1,
        })
    }
    return [carro, addToCart]
}  */
