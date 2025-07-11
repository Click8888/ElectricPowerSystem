import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// import "./assets/css/bootstrap.min.css";
// import "./assets/css/bootstrap-grid.min.css";
// import "./assets/css/bootstrap-reboot.min.css";
// import "./assets/css/bootstrap-utilities.min.css";
// import "./assets/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <link href='./components/sidebar.css'></link> */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous"></link>
    <App />
  </React.StrictMode>
  
)