import React from 'react';
import ReactDOM from 'react-dom';
 import Register from './Register';
import './index.css';
// import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
// import Log from './Log';
import Login from './Login';
import UserProfile from './UserProfile';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Yup from './Yup';


ReactDOM.render(
  <React.StrictMode>
    < Router>
    <UserProfile />
    <Routes>
      <Route path="Login" element={<Login />}></Route>
      <Route path="Register" element={<Register />}></Route>
    </Routes>
    </Router>
    {/* <App /> */}
    {/* <Register /> */}
    {/* <Yup /> */}
    {/* <Login /> */}
    {/* <Log /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
