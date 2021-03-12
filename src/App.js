import React, { useState } from "react";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h3>React Counter</h3>
      <p className="click_desc">
        The total is currently:<span>{count}</span>
      </p>
      <div className="button_container">
        <button onClick={()=>{
          setCount(count +1)
        }}>Add one</button>
        <button onClick={()=>{
          setCount(count * 5)
        }}>Multiply by 5</button>
        <button onClick={()=>{
          setCount(0)
        }}>reset</button>
      </div>
      <h1 id= "big_total">{count}</h1>
    </div>
  );
}

export default App;
