import React from 'react'
import { NavLink} from 'react-router-dom';
import { useState } from 'react';

 function Header({setIslogin ,islogin } ) { //put the props in curly bracets {}
    
function Renderbutton(){
        if(islogin == true){
          return <button onClick={()=>{
            setIslogin(false)
          }}>Logout</button>
        }else{
          return<button onClick={()=>{
            setIslogin(true)
          }}>login</button>
        }
      }
    
  return (
    <>
      <div id="header">
    <NavLink to = "/home" activeClassName="active">Home</NavLink> 
    <NavLink to = "/Product" activeClassName="active">Product</NavLink>
    <Renderbutton />
    </div>
    </>
  )
}
export default Header;



// const About=()=>{
   
//     let[data , setData] = useState("")
//     let[value , setValue] = useState(10)
//     let handleDataIncrement=()=>{
//         setData("10")
//     }
//     const handleValueIncrement=()=>{
//         setValue(value+1)
//     }
//     useEffect(()=>{
//         console.log('component render')
//             },[])
        

//     return(
//         <>
        
//         <button onClick={()=>{handleDataIncrement()}} >-</button>data={data}<br></br>
//         <button onClick={()=>{handleValueIncrement()}} >+</button>value={value}
//         {/* <Child a={10}/> */}
//         </>
//     )
// }
// export default About;


