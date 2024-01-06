import React, { Component } from 'react';
import { useState } from "react";


export default class Imgfondo extends React.Component {
  /*
    constructor(props) {
      
        super(props);
        this.state = {
            isNavExpanded: false
        };
       
    }
 */
 
   
  render () {
    

    return (
        <div class="imgfondo" style={{ 
            backgroundImage: `url("https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg")` 
          }}>
            Hello World
          </div>
       

    );
    
  }

  
}