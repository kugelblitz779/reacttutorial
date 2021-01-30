import React, {useState} from 'react'

const UseStateCounter = () => {


    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Click Here !</button>
            
        </div>
    )
}

export default UseStateCounter
