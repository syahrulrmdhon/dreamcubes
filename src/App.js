import React, { Component } from 'react';
import laptop from './laptop.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{textAlign:'center'}}>Cara Mengikuti AWR 2018</h1>
        <div className="row articles">
          <article className="articleShort">
            <div className="card">
              <div className="card-image">
                  <img src={laptop} alt="alt here"/>
              </div>
              <div className="card-content">
                <p>Step 1</p>
                <h3>Lorem ipsum dolor sit amet, persecuti dissentiet cum cu. </h3>
              </div>
            </div>
          </article>
          </div>
        </div>
    );
  }
}

export default App;
