import React, {useState} from 'react'

const UseStateprev = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <div>
            <h2> {count} </h2>
            <button onClick={incrementCount}>
                Click Me !
            </button>
        </div>
    )
}

export default UseStateprev
