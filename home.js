import React from "react"

// class Home extends React.Component{

// state ={
    
//     itemname:"",
//     itemnumber:[],
// }    


// handleAddItem(){
// console.log(this)
// }


//     render(){
//         // console.log("render meathord is called")
//         return(
//             <>
//             <input onChange={(e)=>{this.setState({itemname:e.target.value})}} 
//             placeholder="type your name" />
//             <button onClick={() => {this.handleAddItem()} }>additem</button>

//             </>
//         )
//     }
// }
// export default Home;


// class Home extends React.Component{
 
// shouldComponentUpdate(nextprops,nextstate){
//    if(this.props==nextprops){
//     return false
//    }else{
//     return  true
//    }

// }    
// render(){
//     console.log('childcomponent is called')
//     return(
//         <>
//         <h1>value={this.props.value}</h1>
//         </>
//     )
// }
// }

// export default Home; 

const Home =()=>{
    return(
        <>
        <h1>home component</h1>
        </>
    )
}
export default Home;