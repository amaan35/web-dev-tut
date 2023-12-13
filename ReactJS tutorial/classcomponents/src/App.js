import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }

    this.increment = this.increment.bind(this);
  }

  increment(){
    this.setState((prevState)=>({counter: prevState.counter+1}))
  }

  //To understand class components without constructor 
  /*
  state = {
    name: 'Amaan',
    count: 0,
    show: true
  }
  inc = ()=>{
    this.setState((prevState)=>({count: prevState.count+1}))
  }

  componentDidMount(){
    console.log("component created")
    this.setState({count:10})
  }

  componentDidUpdate(){
    console.log("component rendered")
    //if condition is not given, it will fall into an infinite loop
    if(this.state.count < 50){
      this.setState((prevState)=>({count: prevState.count+10}))
    }
  }

  render(){
    let welcome;
    if(this.state.show){
      welcome = <Welcome/>
    }
    return (
      <div className="App">
        <Welcome name={'Syed Amaan Ali'}/>
        <h3>{this.state.name}</h3>
        <h3>{this.state.count}</h3>
        <button onClick={this.inc}>increment</button>
        {welcome}
        <button onClick={()=>this.setState({show:false})}>Remove above class component</button>
      </div>
    );
  }*/

  render(){
    return(
      <div className='App'>
        <h1>Class Components using contructor</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={this.increment}>Increment Counter</button>
      </div>
    )
  }

}

export default App;
