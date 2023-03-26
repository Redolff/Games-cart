import React from "react";

const BubbleAlert = ({ value }) => {

    const cantidad = value
    const getNumber = (n) => {
        if(!n){
            return ''
        }
        return n > 9 ? ('9+') : (n)
    }

    return (
        <span>
            {getNumber(cantidad)}
        </span>
    )
}

export default BubbleAlert