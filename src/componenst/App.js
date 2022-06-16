import React, {useState} from "react";
const App = () =>{
  const [counter, setCounter] = useState(0)
  const increment = () =>{
    setCounter(counter + 10)
  }
  const decrement = () =>{
    setCounter(counter - 10)
  }
  const revest = () =>{
    setCounter(counter === 0)
  }

  return (
    <div>
<h1>Счетчик: {counter}</h1>
<button onClick={increment} className="btn">Добавить</button>
<button onClick={decrement} className="btn">Убрать</button>
<button onClick={revest} >Сбросить</button>

    </div>
  );
}

export default App;
