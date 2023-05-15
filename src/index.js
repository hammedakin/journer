import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'jquery'
import 'boxicons'
import 'bootstrap/dist/js/bootstrap'
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
