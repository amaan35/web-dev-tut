import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <Student name="Amaan Ali" age={22}/>
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* using functional component  */}
      {/* <Hello name="Bruce" heroName="Batman">
        <p>This is a paragraph</p>
      </Hello>
      <Hello name="Clark" heroName="Superman">
        <button>action</button>
      </Hello> */}

      {/* using class component */}
      {/* <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/> */}
    </div>
  );
}

export default App;
