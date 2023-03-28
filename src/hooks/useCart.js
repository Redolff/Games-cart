import { useState } from "react"

const useCart = () => {
    
    const [carro, setCarro] = useState([])
    const [cantidad, setCantidad] = useState(0)
    
    const addToCart = (game) => {
        if(carro.find(x => x.id === game.id)){
            carro.map(x => x.nombre === game.nombre ? ({
                ...x,
                cantidad: x.cantidad + 1 
            }) 
            : (x))
        }
        setCarro([
            ...carro,
            game,
        ])
        setCantidad(cantidad + 1)
    }
    return [carro, addToCart]    
}

export default useCart


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