import logo from './logo.svg';
import React ,{useState}from'react'
import {BrowserRouter , Link,NavLink , Route, Routes , Navigate} from "react-router-dom"
import Home from "./home"
import Header from './Header';
import axios from 'axios'
import Product from './product';
import './App.css';


const App =()=>{
  let [isloggedin,setIsloggedin] = useState(false)

  function RenderButton(){
    if(isloggedin == true){
      return <button onClick={()=>{
        setIsloggedin(false)
      }}>logout</button>
    }else{
      return<button onClick={()=>{
        setIsloggedin(true)
      }}> login</button>
    }
  }

return(
    <>

    <BrowserRouter>
    <div class="header"> 
    <NavLink to = '/home' activeClassNameName="active">Home</NavLink>
    <NavLink to = '/product' activeClassNameName="active">Product</NavLink>
    <RenderButton />
    </div>
    <Routes>
      <Route path ='/home' element={<Home />} />
      <Route path ='/product' element={isloggedin == true ? <Product /> : <Navigate to ="/home" />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;




