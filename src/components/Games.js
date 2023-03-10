import React from "react"

const Games = ({ id, nombre, imagen, precio, stock, boton }) => {
    return (
        <div key={id} className="col-4 card" width= '18rem' height='30'>         
            <h2 className="card-title"> {nombre} </h2>
            <img src={imagen} alt={nombre} className="img-thumbnail" height='250' width='250'/>
            <h5> ${precio} </h5>
            <button> {boton} </button>
        </div>
    )
}

export default Games