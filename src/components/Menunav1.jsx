import React, { Component } from 'react';
import { useState } from "react";


export default class Menunav1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavExpanded: false
        };
    }

  showSettings (event) {
    event.preventDefault();

  }
   
  render () {
    

    return (
     <nav className="navigation">
      <a href="/" className="brand-name">
        Mi Portafolio React
      </a>
      <button
        className="hamburger"
        onClick={() => {
          this.setState({isNavExpanded: !this.state.isNavExpanded})
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          this.state.isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }

  
}