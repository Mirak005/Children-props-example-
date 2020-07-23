import React from "react" ; 


const style = {
    width :"60%",
     margin:"auto" ,
    display : "flex",
    justifyContent:"space-around",
    color:"red" 
    }
function Navbar(props){
    return (
        <div>
            <h1>{props.title}</h1>
        <ul style={style}>
            
        {props.children}
      </ul>
      </div>
    )
}

export default Navbar 