import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
// import HomeComponent from './components/HomeComponent';
// import ValidationComponent from './components/ValidationForm';
// import DataComponent from './components/DataBindingComponent';
// import RegisterComponent from './components/RegisterComponent';
import AppHomeComponent from './components/AppHomeComponent';

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      <AppHomeComponent />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
