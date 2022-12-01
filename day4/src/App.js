import React, { useState, useEffect } from "react";
import "./App.css";
import CardComponent from "./card";
// import { Row, Col } from "react-bootstrap";
import DarkExample from "./table";

function App() {
  //     value   function             default value
  const [number, setNumber] = useState(1000);
  const [number1, setNumber1] = useState(1000);
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await response.json();
    setData(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, [number1]);
  // dependency array

  return (
    <div className="App">
      <CardComponent title="Hello" body="World" />
      <br></br>
      number ----- {number}
      <br />
      number 1 ----{number1}
      <br />
      <button onClick={() => setNumber(number + 1)}>Number</button>
      <br />
      <button onClick={() => setNumber1(number1 - 1)}>Number 1</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DarkExample />
      {data.map((item, index) => {
        console.log(item.name);
        return (
          <DarkExample id={item.id} title={item.completed} completed={item.userId} />
        );
      })}
    </div>
  );
}

export default App;