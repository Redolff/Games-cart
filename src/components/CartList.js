import '../App.css'

const CartList = ({ carro }) => {

    return (
        <div className="detallesCarro">
            <ul className="cart-ul">
                {carro.map(x => 
                    <li className="cart-producto" key={x.id}> 
                        <img src={x.imagen} alt={x.nombre} width='50' height='50'/> 
                        {x.nombre}
                        <span> {x.cantidad} </span> 
                    </li>    
                )}
            </ul>
        </div>
    )
}

export default CartList