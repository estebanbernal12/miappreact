import React from 'react'
import {useState} from 'react'




const Contador = () => {
   
   const [count,setCount]=useState(0);
 
   
   function addClick(){
    setCount(count+1);
   } 
   
    return (

        <button onClick={addClick}>Contar {count}</button> 

    )
}

export default Contador