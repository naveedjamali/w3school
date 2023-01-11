import { useState } from "react";
import { ReactDOM } from "react";
import Todo from "./todo";
import './App.css'

const App = () => {
  const [count,setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = ()=>{
    setCount((c)=>c+1);
  };
  return <>
  <Todo todos={todos}/>
  <hr/>
  <div>
    Count: {count}
    <button onClick={increment}>+</button>
  </div>
  
  </>;
};


export default App;
