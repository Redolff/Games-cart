import '../App.css'

const CartList = ({ carro, deleteProduct }) => {

    return (
        <div className="detallesCarro">
            <ul className="cart-ul">
                {carro.map((x) => 
                    <li className="cart-producto" key={x.id}> 
                        <img src={x.imagen} alt={x.nombre} width='50' height='50'/> 
                        {x.nombre}
                        <span> {x.cantidad} </span>
                        <button className='btn btn-danger' onClick={() => deleteProduct(x.id)}>
                            Eliminar
                        </button>
                    </li>    
                )}
            </ul>
        </div>
    )
}

export default CartList