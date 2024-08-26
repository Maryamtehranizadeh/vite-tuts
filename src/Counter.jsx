import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
     
    const increaseHandler = ()=>{
          setCounter(counter+1)  
    }
    return (
        <div>
            <hr />
            <h1>counter</h1>
            <h3>{counter}</h3>
            <button onClick={increaseHandler}>Increase</button>
        </div>
  )
}

export default Counter