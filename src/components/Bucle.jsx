import React from 'react'


const Bucle = () => {

    const data = [{id:"1",name: "esteban 1", "age": 44}, {id:"2" ,name:"Jesteban 2", "age": 45}];
    const listli= data.map(persona=>
      <li key={persona.id} style={{color:"magenta"}}>
        {persona.name} 
      </li>

      );

      
    return (
       
        <ul>
          {listli}
        </ul> 

    )
}

export default Bucle