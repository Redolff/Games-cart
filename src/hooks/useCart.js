const useCart = () => {

    let carro = []
    
    const addToCart = (game) => {
        if(carro.find(x => x.nombre === game.nombre)){
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
    }  
    return [carro, addToCart]
}

export default useCart