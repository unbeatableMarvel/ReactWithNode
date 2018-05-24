import React from 'react';
import form from '../Container/form';
import {Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends React.Component {
   
 
    render() {

        return (


            <MuiThemeProvider >

                <div>

                    <Route exact path="/" component={form} />
                </div>

            </MuiThemeProvider>

        );
    }
}




