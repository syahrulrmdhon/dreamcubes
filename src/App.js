import React, { Component } from 'react';
import laptop from './laptop.png';
import phone from './phone.png';
import run from './run.png';
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
          <article className="articleShort">
            <div className="card">
              <div className="card-image">
                  <img src={phone} alt="alt here"/>
              </div>
              <div className="card-content">
                <p>Step 2</p>
                <h3>Lorem ipsum dolor sit amet, persecuti dissentiet cum cu. </h3></div>
            </div>
          </article>
          <article className="articleShort articleMain">
            <div className="card">
              <div className="card-image" style={{backgroundColor:'linen'}}>
                  <img src={run} alt="alt here"/>
              </div>
              <div className="card-content">
                <p>Tentang AWR 2018</p>
                <h3>Allianz World Run 2018</h3>
                <p>Lorem ipsum dolor sit amet, persecuti dissentiet cum cu. 
                  Mel esse meliore detracto ei, qui quem magna te. An liber audiam ocurreret eum, 
                  vim eu fastidii periculis. </p>
                <p><a href=''>Show less detail</a></p>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>persecuti dissentiet cum cu</li>
                  <li>Mel esse meliore detracto ei,</li>
                  <li>An liber audiam ocurreret eum,</li>
                </ul>
              </div>
            </div>
          </article>
          </div>
        </div>
    );
  }
}

export default App;
