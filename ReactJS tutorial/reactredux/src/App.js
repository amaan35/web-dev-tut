import "./App.css";
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { Inc, Dec } from './states/reducers/index'

function App() {
  const currentState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Redux tutorial</h1>
      <div style={{ width: "100%", display: "flex", flexDirection: 'column', alignItems: "center" }}>
        <h1>{currentState}</h1>
        <div>
          <button onClick={()=>dispatch(Inc(10))}>Increment</button>
          <button onClick={()=>dispatch(Dec(5))}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
