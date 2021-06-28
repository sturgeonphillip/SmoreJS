import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import ImportForm from './ImportForm';
import OverviewFlow from './OverviewFlow';
import StateDisplay from './StateDisplay';
import './style.css';
//import logo from '';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';


const mainElement = document.createElement('div');
mainElement.id = 'root';
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      {/* <center>
        <img id="SmoreLogo" src={logo}/>
      </center> */}
      
        <h3>State Management Optimization for Recoil</h3>
     
      <br></br>
      <RecoilRoot>
      
      <div id="middle">
        <ImportForm />
        <OverviewFlow />
      </div>
      <StateDisplay/>
      </RecoilRoot>
    </>
  )
}



ReactDom.render(<App />, document.getElementById('root'));