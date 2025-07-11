import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import Sidebar from './components/sidebar.jsx';
import Navbar from './components/navbar.jsx';
// import './components/navbar.css'
// import './components/sidebar.css'


function App() {
    return(
    <div>
    
      <Navbar />
        <div>
            <Sidebar style={{backgroundColor: "#333"}} />
            <main className="flex-grow-1 p-4">
            </main>
        </div>
    </div>
    )
}

export default App;

