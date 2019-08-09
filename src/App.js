import React, { Component } from 'react';



import "./static/css/index.css"
import {
      BrowserRouter,
      
}  from 'react-router-dom'


import Layout from './components/layout/index'

class App extends Component {
 
  render(){
    return (
        <BrowserRouter>
            <Layout></Layout>
        </BrowserRouter>
        
    )
  }
}

export default App;
