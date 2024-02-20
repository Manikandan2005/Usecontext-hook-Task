import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './components/DashBoard';
import DataContextComponent from './utils/DataContextComponent';

function App() {
  return <>
    <DataContextComponent><NavBar/></DataContextComponent>
    <DataContextComponent><DashBoard/></DataContextComponent>
  </>
}

export default App