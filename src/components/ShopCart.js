import React from 'react'
import BubbleAlert from './BubbleAlert'
import CartList from './CartList'

const ShopCart = ({ carro }) => {

    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)

    return (
        <div>
            <span className='bubble'>
                {cantidad !== 0  
                    ? <BubbleAlert value={cantidad}/>
                    : null
                }
            </span>
            <button className="btn btn-primary carro">
                Shop Cart
            </button>
            <CartList 
                carro={carro}
            />
        </div>
    )
}

export default ShopCart