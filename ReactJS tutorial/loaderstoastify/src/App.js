import "./App.css";
import { useEffect, useState } from "react";
import { Bars, TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      setLoading(true);
      async function getData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            setLoading(false);
            toast.success("Successfully fetched data");
          });
        //To show toast only once disable strict mode in index.js
      }
      getData();
      setClicked(false); 
    }
  }, [clicked]);

  const handleButtonClick = () => {
    setClicked(true); // Update state to trigger useEffect
  };

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "black",
          color: "white",
          margin: 0,
          padding: 15,
        }}
      >
        React Loaders and Toastify
      </h1>
      <button onClick={handleButtonClick}>Get data</button>
      <ToastContainer />
      <div className="spin">
        {loading ? (
          <Bars />
        ) : (
          data.map((item, index) => {
            return <p>{item.title}</p>;
          })
        )}
      </div>
    </div>
  );
}

export default App;
