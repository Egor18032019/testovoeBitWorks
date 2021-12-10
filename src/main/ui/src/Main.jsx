import React, { useState, useReducer } from 'react';
import { DataContext, initialState, dataReducer } from "./DataReducer"
import Toolbar from "./Toolbar.jsx"
import View from "./View.jsx"


function Main() {
 
    return (
        <div className="main">
            <Toolbar
        
            />
        </div>
    );
}

export default Main;
