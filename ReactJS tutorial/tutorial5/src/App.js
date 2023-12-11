import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import ProjectHeader from "./components/ProjectHeader";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import ProjectFields from "./components/ProjectFields";
import { useEffect } from "react";

function App() {
  // const[num, setNum] = useState(1);

  // function inc(){
  //   setNum(num+1);
  // }
  // function dec(){
  //   setNum(num-1);
  // }

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [form, setForm] = useState({});
  // const [data, setData] = useState([]);

  // const addData = () => {
  //   setData([...data, form]);
    // setName("");
    // setEmail("");
    // setForm(form);
  // };

  // const removeItem = (index)=>{
  //   let arr = data;
  //   arr.splice(index, 1);
  //   setData([...arr]);
  // }

  const [state, setState] = useState(5);
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function getData(){
      let get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      let res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();
    document.title = `(${state}) employees`;
  },[state])  //no dependency will call on each render, empty dependency [] will not call at all
  return (
    <div className="App">
      <Header/>
      <button onClick={()=>setState(state+5)}>increment state {state}</button>
      {
        data.map((element, index)=>{
          return(
            <div className="employee" key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
          )
        })
      }
      {/*useEffect hook explained*/}
      {/* <ProjectHeader /> */}
      {/* <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            // value={name}
            value={form.name}
            // onChange={(event) => setName(event.target.value)}
            onChange={(event)=>setForm({...form, name: event.target.value})}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            // value={email}
            value={form.email}
            // onChange={(event) => setEmail(event.target.value)}
            onChange={(event)=>setForm({...form, email: event.target.value})}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div> */}
      {/* <div className="data">
        <div className="dataVal">
          <h4>Name</h4>
          <h4>Email</h4>
          <button>Remove</button>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="dataVal">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <button onClick={()=>removeItem(index)}>Remove</button>
            </div>
          );
        })}
      </div> */}
      {/* <Header/>
      <div>
        <h1>{num}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div> */}
    </div>
  );
}

export default App;
