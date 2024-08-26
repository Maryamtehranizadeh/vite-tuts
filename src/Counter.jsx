import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [isShow, setIsShow] = useState(true);

    const showHandler=()=>{
        setIsShow(true)
    }

    const hideHandler=()=>{
        setIsShow(false)
    }
     
    const increaseHandler = ()=>{
          setCounter(counter=>counter+1)  
    }
    const decreaseHandler = ()=>{
        setCounter(counter=>counter-1)  
    }
    const stopHandler = ()=>{
        setCounter("Stopped")  
    }


    return (
        <>
            <button onClick={showHandler}>Show</button>
            <button onClick={hideHandler}>Hide</button>
            {
                isShow && <div>
                <hr />
                    <h1>counter</h1>
                    <h3>{counter}</h3>
                    <button onClick={increaseHandler}>Increase</button>
                    <button onClick={decreaseHandler}>Decrease</button>
                    <button onClick={stopHandler}>Stop</button>
                </div>
            }
            
        </>
  )
}

export default Counter