import React from 'react'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Navbar from "./Components/Navbar";
import{BrowserRouter, Routes, Route} from "react-router-dom"

function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<AboutUs/>}/>
      {/* <Route path ="/Courses" element={<Courses_Offered/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;