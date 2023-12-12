import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react'

const reducer = (state, action)=>{
  if(action.type === "INC"){
    return state+1;
  }else if(action.type === "DEC"){
    return state-1;
  }else{
    return state*2;
  }
  return state
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type: "INC"})}>Increment</button>
    <button onClick={()=>dispatch({type: "DEC"})}>decrement</button>
    <button onClick={()=>dispatch({type: "MUL"})}>Multiply</button>
    </>
  );
}

export default App;
