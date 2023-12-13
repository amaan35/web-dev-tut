import "./App.css";
import React from "react";
import { useState, useEffect, createContext, useRef, useMemo, useCallback } from "react";
import Child from "./components/Child";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

//to understand the use of useContext hook
/*export const globalInfo = createContext();*/

function App() {
  //To understand use of useState hook
  /*const [count, setCount] = useState(1);
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }*/

  //To understand use of useEffect hook
  /*const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);*/

  /*
  return (
    <>
      <h1>React Hooks Tutorial</h1>
      <h3>useState hook</h3>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <h3>useEffect hook</h3>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h4>{resourceType}</h4>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );*/

  //To understand the use of useContext hook
  /*const [color, setColor] = useState('green'); 
  const getDay = (item)=>{
    console.log(item)
  }
  return(
    <globalInfo.Provider value={{appColor:color, getDay:getDay}}>
      <h1>React hooks</h1>
      <h3>useContext hook</h3>
      <Child/>
    </globalInfo.Provider>
  );*/

  //To understand the use of useRef hook
  /*let inputRef = useRef(null);
  function handleInput(){
    // inputRef.current.value = 1000;
    // inputRef.current.focus();
    // inputRef.current.style.color = 'blue';
    inputRef.current.style.display = 'none';
  }
  return(
    <>
      <h1>React Hooks</h1>
      <h3>useRef hook</h3>
      <input type="text" ref={inputRef}/>
      <button onClick={handleInput}>format input</button>
    </>
  )*/

  //To understand the use of useReducer hook
  /*return(
    <>
      <h1>React hooks</h1>
      <h3>useReducer hook</h3>
      <Counter/>
    </>
  )*/

  //To understand the use of useMemo hook
  /*const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multiCount called");
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>React hooks</h1>
      <h3>useMemo hook</h3>
      <h4>Count : {count}</h4>
      <h4>Item : {item}</h4>
      <h4>{multiCountMemo}</h4>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setItem(item + 1)}>increment</button>
    </>
  );*/

  //To understand the use of useCallback hook
  /*const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const increment = ()=>{
    setCount((c)=>c+1)
  }
  const addTodo = useCallback(()=>{
    setTodos((t)=>[...t, "New Todo"])
  }, [todos])
  return(
    <>
      <h1>React hooks</h1>
      <h3>useCallback hook</h3>
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
      <hr/>
      <Todos todos={todos} addTodo={addTodo}/>
    </>
  )*/

}

export default App;
