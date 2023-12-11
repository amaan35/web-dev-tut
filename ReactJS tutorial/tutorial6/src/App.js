import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":userId" element={<UserDetails />}/>

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
