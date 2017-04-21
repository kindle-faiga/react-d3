import React, { Component } from 'react';
import {Col, Row, Grid} from 'react-bootstrap';
import * as d3 from 'd3';
require('../css/style.css');

class App extends Component 
{
    constructor()
    {
        super();

        this.state = 
        {
            width: "800",
            height: "600",
            flame: "double 10px #000000"
        };
    }

    render() 
    {
        return (
            <div className="app">
                <svg 
                    width={this.state.width} height={this.state.height}
                    style={{border: this.state.flame}}
                >
                </svg>
            </div>
        );
    }
}

export default App;