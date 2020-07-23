import React from 'react'
import "./formContainer.css"

function FormContainer(props) {
    return (
        
       <form className={
           //js 
           `my-form ${props.background} ${props.textColor}`
       } >
           <h2>{props.title}</h2>
           {props.children}
       </form>
    )
}

export default FormContainer
