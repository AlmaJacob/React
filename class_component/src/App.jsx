// class component
// import React from "react";

// class App extends React.Component{
// render(){
//   return(
//     <h1>class Component</h1>
//   )
// }
// }

// props in class component
// eg:1

// import React, { Component } from 'react';
// class Greetings extends Component {
//   render() {
//     return <h1>Hi {this.props.name}!</h1>;
//   }
// }

// class App extends Component {
//   render() {
//     return <Greetings name="alma" />;
//   }
// }

// eg:2
import React from "react";
class App extends React.Component{
  constructor(){
    super()
    this.state={
      color:'red',
      size:'400px',
      name:props.name,

    }
  }
  render(){
    return(
      <div>
        <h1>state in class component</h1>
        <p>{this.state.size}</p>
        <p>{this.state.color}</p>
        <p>{this.state.name}</p>
        </div>
    )
  }
}
export default App
// export default App;

// state in class component

// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       color:'red',
//       size:'400px'

//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>state in class component</h1>
//         <p>{this.state.size}</p>
//         <p>{this.state.color}</p>
//       </div>
//     )
//   }
// }
// export default App