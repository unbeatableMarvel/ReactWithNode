import React from 'react';
import ReactDOM from "react-dom";
import App from './Component/MainApp';
import { HashRouter } from 'react-router-dom';

// var React =require('React');
// var ReactDOM =require('ReactDOM');
// var ReacApptDOM =require('./Component/MainApp');
// var HashRouter =require('react-router-dom');

ReactDOM.render(
    <div>
     
            <HashRouter>
                <App />
            </HashRouter>
   

    </div>,
    document.getElementById('app')
);
