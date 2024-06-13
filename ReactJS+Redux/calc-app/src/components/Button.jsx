import React from "react"


const Button = ( {type, text, clickHandler} ) => {
    return (
        <button className={type} onClick={()=>{
            console.log("onclick en el button")
            clickHandler(text)
        }} >
            <span>{text}</span>
        </button>
    )
}

export default Button
